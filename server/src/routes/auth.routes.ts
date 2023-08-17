import { Router } from "express";
import { register, login } from "../controllers/auth.controller";
import { body } from "express-validator";

const router = Router();

// POST SIGNUP/LOGIN
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Введіть своє ім'я").trim(),
    body("email")
      .isEmail()
      .withMessage("Некоректний формат електронної пошти")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль має містити щонайменше 6 символів")
      .trim(),
  ],
  register
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Некоректний формат електронної пошти"),
    body("password").notEmpty().withMessage("Введіть пароль"),
  ],
  login
);
export default router;
