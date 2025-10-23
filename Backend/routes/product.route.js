import express from "express";
import { deleteProduct, getProducts, postProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//POST
router.post("/", postProduct);

//GET
router.get("/", getProducts);

//DELETE
router.delete("/:id", deleteProduct);

//UPDATE
router.put("/:id", updateProduct)

export default router;