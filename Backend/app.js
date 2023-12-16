import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import productData from './Routes/productData.js'
import users from './Routes/user.js'
import stripe from "./Routes/stripe.js"
import 'dotenv/config'
const CONNECTION_URL = process.env.MONGO_URL ||
  "mongodb+srv://Rohit:123@cluster0.xqoa6nc.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT||5001;
const app = express();

app.use(express.json())
app.use(cors());

app.use('/products',productData);
app.use('/user',users);
app.use('/stripe',stripe);


mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
