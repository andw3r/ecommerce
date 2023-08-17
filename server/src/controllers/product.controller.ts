import { Request, Response } from "express";
import { validationResult } from "express-validator";
import productModel from "../models/product.model";
import { ProductRequest } from "../types/products";

// Створення нового продукту
export const createProduct = async (req: ProductRequest, res: Response) => {
  const {
    title,
    description,
    price,
    colors,
    avaibleSizes,
    images,
    categories,
  } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newProduct = await productModel.create({
      title,
      description,
      price,
      colors,
      avaibleSizes,
      images,
      categories,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// // Отримання всіх продуктів
export const getAllProducts = async (req: ProductRequest, res: Response) => {
  try {
    const products = await productModel.find();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Отримання продукту за ідентифікатором
export const getProductById = async (req: ProductRequest, res: Response) => {
  try {
    const productId = req.product?._id;
    const product = await productModel
      .findById(productId)
      .populate("categories");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Видалення продукту
export const deleteProduct = async (req: ProductRequest, res: Response) => {
  try {
    const product = req.product?._id;

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await productModel.findByIdAndDelete(product);

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Оновлення продукту
export const updateProduct = async (req: ProductRequest, res: Response) => {
  try {
    const productToUpdate = req.product;

    if (!productToUpdate) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      productToUpdate._id,
      req.body,
      { new: true }
    );

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
