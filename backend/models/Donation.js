import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorName: String,
  donorEmail: String,
  donorAddress: String,
  amount: Number,
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  method: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;  // Use default export
