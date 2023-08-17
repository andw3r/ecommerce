import { Response, Router } from "express";
import userModel from "../models/user.model";
import { AuthenticatedRequest } from "../types/users";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "../types/token";

const router = Router();

export const getUserInfo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token not found." });
    }

    const decodedToken: DecodedToken = jwtDecode(token);
    if (!decodedToken._id) {
      return res.status(401).json({ message: "Invalid token." });
    }

    // Ви можете додатково перевірити додаткові дані з decodedToken, якщо потрібно
    const userId = decodedToken._id; // issue - Property '_id' does not exist on type '{}'.ts(2339) any;

    // Отримати інші дані користувача за userId
    await userModel.findById(userId);

    return res.status(200).json({
      userId,
      // Додайте інші дані користувача за потреби
    });
  } catch (error: any) {
    console.error("Error fetching user info:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default router;
