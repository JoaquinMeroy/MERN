import Product from "../models/product.model.js"

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