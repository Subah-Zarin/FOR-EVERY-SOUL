import express from "express";
import { Register, login } from "../controllers/authController.js";

const router = express.Router();

// Route for user registration
router.post("/register", Register);

// Route for user login
router.post("/login", login);


export default router;
