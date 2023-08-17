import { Types } from "mongoose";
import { ValidationChain, validationResult } from "express-validator";
import { Request } from "express";

export enum Sizes {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface IProduct {
  _id: Types.ObjectId;
  title: string;
  description: string | undefined;
  price: number | number[];
  colors: string | string[];
  avaibleSizes: Sizes;
  images: string | string[];
  categories: Types.ObjectId[] | undefined;
  discount: number;
  // Додайте інші характеристики товару, які вам потрібні
}

export interface ProductRequest extends Request {
  product?: IProduct;
}
