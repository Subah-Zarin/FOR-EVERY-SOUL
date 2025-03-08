const mongoose = require('mongoose');
const User = require('../models/User'); // Assuming you have a User model
const Campaign = require('../models/Campaign'); // Assuming you have a Campaign model
const Donation = require('../models/Donation'); // Assuming you have a Donation model

exports.createDonation = async (req, res) => {
    try {
        const { userId, campaignId, amount, donationMethod, message } = req.body;

        // Convert to MongoDB ObjectId (if necessary)
        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(campaignId)) {
            return res.status(400).json({ message: 'Invalid userId or campaignId' });
        }

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if campaign exists
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        // Create donation record
        const newDonation = new Donation({
            userId,
            campaignId,
            amount,
            donationMethod,
            message,
        });

        await newDonation.save();
        return res.status(201).json({ message: 'Donation successful!', donation: newDonation });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
