import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    goalAmount: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

// Check if the model is already defined to prevent overwriting
const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);

export default Campaign;
