import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// import productData from './Routes/productData.js'
import users from './Routes/user.js';
const CONNECTION_URL =
  "mongodb+srv://Rohit:123@cluster0.xqoa6nc.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
const app = express();

const port = 5000;

app.use(express.json())
app.use(cors());
// app.use('/products',productData);
app.use('/user',users);
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
