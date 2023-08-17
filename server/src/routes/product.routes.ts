import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller";
import { checkProductExists } from "../middleware/product.middleware";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

// add new product via admin panel
router.post("/add", verifyToken, createProduct);

// get all products
router.get("/all", getAllProducts);

router.delete("/delete", deleteProduct);
router.post("/update", updateProduct);

export default router;
