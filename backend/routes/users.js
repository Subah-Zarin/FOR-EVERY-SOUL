import express from "express";
import { getProfile, getAllUsers } from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();


router.get("/profile", getProfile);


router.get("/", checkToken, getAllUsers);

export default router;
