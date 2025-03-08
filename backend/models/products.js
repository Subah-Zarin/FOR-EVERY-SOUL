import mongoose from "mongoose";

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

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
