import express from "express";
import { addVolunteer, getVolunteers } from "../controllers/volunteerController.js";

const router = express.Router();

router.post("/volunteers", addVolunteer);  // Add Volunteer
router.get("/volunteers", getVolunteers);  // Get All Volunteers (Admin Use)

export default router;
