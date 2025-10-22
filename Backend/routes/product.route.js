import express from "express";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();

//GET
router.get("/", getProducts);

//POST
// app.post("/api/products", async (req, res) => {
//   const product = req.body;
//   if (!product.name || !product.price || !product.image) {
//     res.status(500).json({ message: "Error" });
//   }
//   else {
//     try {
//       const newProduct = new Product(req.body);
//       const savedProduct = await newProduct.save();
//       res.status(201).json({ success: true, data: savedProduct });
//     } catch (error) {
//       res.status(400).json({ message: `Error ${error.message}` })
//     }
//   }

// });

//DELETE
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const deleteProduct = await Product.findByIdAndDelete(req.params.id);
//     if (!deleteProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ success: true, message: "Na Delete na" })
//   } catch (error) {
//     res.status(400).json({ message: `Error ${error.messages}` })
//   }
// });

//UPDATE
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, { runValidators: true });
//     res.status(200).json({ success: true, data: updateProduct });
//   } catch (error) {
//     res.status(404).json({ success: false, message: `Error:${error.message}` });
//   }
// });

export default router;