import express from 'express';
import dotenv from 'dotenv';
import module from 'module';
import { connectDB } from './config/db.js';
import ApiRouter from "./routes/product.route.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.listen(5000, function () {
  console.log("server started ")
});

app.get("/", (req, res) => {
  res.send("server is ready")
});

app.use("/api/ProductRouter", ApiRouter);


module.exports = app;