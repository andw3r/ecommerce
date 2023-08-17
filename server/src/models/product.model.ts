import mongoose, { Document, Schema, Types } from "mongoose";
import { IProduct, Sizes } from "../types/products";

const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true, minlength: 2 },
  description: { type: String, required: false, minlength: 5 },
  price: { type: Number, required: true },
  colors: [{ type: String, required: true }],
  avaibleSizes: [
    {
      type: String,
      enum: Object.values(Sizes),
      required: true,
      default: Sizes.M,
    },
  ],
  images: [{ type: String, required: true }],
  categories: [{ type: Types.ObjectId, ref: "Category" }],
});

const productModel = mongoose.model<IProduct & Document>(
  "Product",
  ProductSchema
);

export default productModel;
