import express from "express";
import {
  AddCategory,
  AddProduct,
  GetAllProduct,
} from "../controllers/product.js";
const router = express.Router();
router.get("/products", GetAllProduct);
router.post("/category", AddCategory);
router.post("/products", AddProduct);
export default router;
