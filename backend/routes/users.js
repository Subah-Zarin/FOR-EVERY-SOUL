import express from "express";
import { getProfile, getAllUsers } from "../controllers/userController.js";
import checkToken from "../middlewares/checkToken.js";
import {getUserByUsername, updateUser } from '../controllers/userController.js';

const router = express.Router();


router.get("/profile", getProfile);

router.get('/:username', getUserByUsername);


router.put('/:username', updateUser);

router.get("/", checkToken, getAllUsers);

export default router;
