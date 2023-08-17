import "dotenv/config";
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest, IUser } from "../types/users";

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authorization token not found." });
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET || "a circus in the middle of the desert"
    ) as { user: IUser };

    req.user = decodedToken.user;
    next();

    // Add the user object to the request for future use
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
