import { body } from "express-validator";

export const registerValidation = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage("Password must contain at least one letter and one number"),
];

export const loginValidation = [
  body("username").notEmpty().withMessage("Username (email) is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
