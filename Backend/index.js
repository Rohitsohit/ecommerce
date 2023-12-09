import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import productData from './Routes/productData.js'
import users from './Routes/user.js';

const PORT = 5000;
const app = express();

const port = 5000;
dotenv.config();
app.use(express.json())
app.use(cors());
// app.use('/products',productData);
app.use('/user',users);
mongoose
  .connect(process.env.mongokey)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
