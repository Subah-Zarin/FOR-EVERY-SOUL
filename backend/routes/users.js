import express from "express";
import { getProfile, getAllUsers } from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";
import {getUserByUsername, updateUser } from '../controllers/userController.js';

const router = express.Router();


router.get("/profile", getProfile);

// Get user by username
router.get('/:username', getUserByUsername);

// Update user data by username
router.put('/:username', updateUser);

router.get("/", checkToken, getAllUsers);

export default router;
