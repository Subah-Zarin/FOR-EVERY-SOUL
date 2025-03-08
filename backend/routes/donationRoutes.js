import express from 'express';
import Donation from '../models/Donation.js';  // Use import
import User from '../models/users.js';  // Use import
import Campaign from '../models/campaigns.js';  // Use import

const router = express.Router();

// Route to process donations
router.post('/donate', async (req, res) => {
  const { donorName, donorEmail, donorAddress, donationAmount, donationMethod, donationMessage, campaignId } = req.body;

  try {
    // Create a new donation
    const donation = new Donation({
      donorName,
      donorEmail,
      donorAddress,
      amount: donationAmount,
      method: donationMethod,
      message: donationMessage,
      campaign: campaignId,
    });

    // Save the donation to the database
    await donation.save();

    // Update the user document with the donation
    const user = await User.findOneAndUpdate(
      { email: donorEmail },
      {
        $push: { donations: donation._id },
      },
      { new: true }
    );

    // Update the campaign document
    const campaign = await Campaign.findById(campaignId);
    campaign.totalDonations += donationAmount;
    await campaign.save();

    res.status(200).json({ message: 'Donation successful!', donation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing the donation.' });
  }
});

export default router;  // Export using ES module
