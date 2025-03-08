import Campaign from "../models/campaigns.js";

// Create a new campaign
export const createCampaign = async (req, res) => {
  try {
    const { title, description,category, goalAmount, imageUrl } = req.body;

    if (!title || !description || !category || !goalAmount || !imageUrl ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCampaign = new Campaign({ title, description,category, goalAmount, imageUrl });
    await newCampaign.save();

    res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });
  } catch (error) {
    res.status(500).json({ message: "Error creating campaign", error });
  }
};
// ✅ Fetch all campaigns
export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
};

// ✅ Search campaigns by title
export const searchCampaigns = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: "Query is required" });

    const regex = new RegExp(query, "i"); // Case-insensitive search
    const campaigns = await Campaign.find({ title: regex });

    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Error searching campaigns", error });
  }
};