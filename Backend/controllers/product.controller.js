import Product from "../models/product.model.js"

//POST
export const postProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    const saveProduct = await newProduct.save();
    if (!newProduct) {
      res.status(404).json({ success: false, message: "product empty" })
    }
    res.status(202).json({ success: true, message: "product added", data: saveProduct });
  } catch (error) {
    res.status(404).json({ success: false, message: `Error: ${error.message}` });
  }
}

// GET
export const getProducts = async (req, res) => {
  try {
    const getProduct = await Product.find();
    if (!getProduct) {
      res.status(404).json({ success: false, message: "No Data" })
    }
    res.status(200).json({ success: true, data: getProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: `Error: ${error}` });
  }
}

//UPDATE
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      res.status(404).json({ success: false, message: " product not found" });
    }
    res.status(202).json({ success: true, message: "product updated", data: updatedProduct });
  } catch (error) {
    res.status(404).json({ success: false, message: `Error: ${error.message}` });
  }
}

//DELETE
export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      res.status(404).json({ success: false, message: "product not found" });
    }
    res.status(202).json({ success: true, message: "product deleted", data: deleteProduct });
  } catch (error) {
    res.status(404).json({ success: false, message: `Error: ${error.message}` });
  }
}