import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userSchema from "../Models/userStorage.js";


export const signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  
  try {
    const myUser = await userSchema.findOne({ email });
    if (!myUser)

      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      myUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    
      const token = jwt.sign(
      { email: myUser.email, id: myUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ myUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};

export const signup = async (req, res) => {

  const { email, password, name } = req.body;
  
  try {
    const existingUser = await userSchema.findOne({ email });
    if (existingUser)
    return res.status(400).json({ message: "User already exist." });
    
    
    
    const hashedPassword = await bcrypt.hash(password,12);


    const myUser = await userSchema.create({
      email,
      password: hashedPassword,
      name: `${name}`,
    });
    const token = jwt.sign({ email: myUser.email, id: myUser._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({data:{myUser:myUser}, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};


