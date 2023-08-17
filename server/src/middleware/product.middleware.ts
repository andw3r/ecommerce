// src/middleware/productExists.ts
import { Request, Response, NextFunction } from "express";
import productModel from "../models/product.model";
import { ProductRequest } from "../types/products";

export const checkProductExists = async (
  req: ProductRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.body._id;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Додаємо знайдений продукт до об'єкта запиту для використання в наступних обробниках
    req.product = product;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
