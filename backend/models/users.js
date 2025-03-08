const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  address: String,
  donations: [
    {
      amount: Number,
      campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
      method: String,
      message: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
