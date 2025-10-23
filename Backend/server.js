import express from 'express';
import dotenv from 'dotenv';
import module from 'module';
import { connectDB } from './config/db.js';
import productRouter from "./routes/product.route.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(5000, function () {
  console.log(`server started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("server is ready")
});

app.use("/api/ProductRouter", productRouter);


export default app;
