import mongoose from "mongoose";

// Define Campaign Schema
const campaignSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    goalAmount: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    donations: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Create Campaign Model
const Campaign = mongoose.model("Campaign", campaignSchema);

// Controller Functions

// ✅ Create a new campaign
export const createCampaign = async (req, res) => {
  try {
    const { title, description, category, goalAmount, imageUrl } = req.body;

    if (!title || !description || !category || !goalAmount || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCampaign = new Campaign({ title, description, category, goalAmount, imageUrl });
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
    console.error("Error fetching campaigns:", error); // Logs the actual error
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

export default Campaign;
