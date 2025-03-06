import express from "express";
import { createCampaign,getAllCampaigns,searchCampaigns } from "../controllers/campaignController.js";

const router = express.Router();

router.post("/create", createCampaign);
router.get("/all", getAllCampaigns);

router.get("/search", searchCampaigns);

export default router;
