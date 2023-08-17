import mongoose, { Document, Schema } from "mongoose";
import { ICategory } from "../types/categories";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const categoryModel = mongoose.model<ICategory & Document>(
  "Category",
  categorySchema
);

export default categoryModel;
