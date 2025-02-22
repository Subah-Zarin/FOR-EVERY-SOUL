import Volunteer from "../models/volunteer.js";

// Add Volunteer
export const addVolunteer = async (req, res) => {
  try {
    const { name, email, phone, dob, occupation, address, country, message } = req.body;

    // Check if volunteer already exists (optional)
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ error: "You have already signed up as a volunteer" });
    }

    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      dob,
      occupation,
      address,
      country,
      message,
    });

    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get All Volunteers (For Admin)
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
