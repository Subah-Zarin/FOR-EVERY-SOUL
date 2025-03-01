import express from "express";
import { createCampaign,getAllCampaigns } from "../controllers/campaignController.js";

const router = express.Router();

router.post("/create", createCampaign);
router.get("/all", getAllCampaigns);

export default router;
