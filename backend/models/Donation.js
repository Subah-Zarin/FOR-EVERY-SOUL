const mongoose = require('mongoose');

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

module.exports = mongoose.model('Donation', donationSchema);
