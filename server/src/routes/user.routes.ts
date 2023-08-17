import { Router } from "express";
import { getUserInfo } from "../controllers/user.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();
router.get("/info/:id", verifyToken, getUserInfo);

export default router;
