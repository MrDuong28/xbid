import { Product, Category } from "../model/product.js";
export const GetAllProduct = async (req, res) => {
  const product = await Product.find().populate({
    path: "category",
    select: "name",
  });
  res.send(product);
};
export const AddCategory = async (req, res) => {
  try {
    const body = req.body;
    const category = new Category(body);
    const result = await category.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
export const AddProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = new Product(body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
