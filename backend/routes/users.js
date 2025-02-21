import express from "express";
import { getUserProfile } from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.get("/profile", checkToken, getUserProfile);

export default router;
