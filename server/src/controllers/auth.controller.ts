import "dotenv/config";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../types/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model";

export const register = async (req: AuthenticatedRequest, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(300).json({ message: "User already exists" });
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const refreshToken = jwt.sign(
      { email },
      process.env.JWT_REFRESH_SECRET as string,
      {
        expiresIn: "30d",
      }
    );

    // Create a new user with the default role as 'user'
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      refreshToken,
    });

    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id }, // Включити нового користувача у токен
      process.env.JWT_SECRET || "a circus in the middle of the desert",
      { expiresIn: "7d" }
    );

    return res
      .status(201)
      .json({ message: "User registered successfully", accessToken });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req: AuthenticatedRequest, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Create and send a JWT token
    const accessToken = jwt.sign(
      { user },
      process.env.JWT_SECRET || "a circus in the middle of the desert",
      { expiresIn: "7d" }
    );

    const refreshToken = jwt.sign(
      { user },
      process.env.JWT_REFRESH_SECRET as string,
      {
        expiresIn: "30d",
      }
    );

    user.refreshToken = refreshToken;
    await user.save();

    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Ваші інші функції (register, login, тощо)
