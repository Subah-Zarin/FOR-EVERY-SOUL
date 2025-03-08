import User from "../models/users.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Optionally, get all users (excluding passwords)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Fetch user data by username
export const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user); // Send user data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user data", error: err.message });
  }
};

// Update user data (phone and address)
export const updateUser = async (req, res) => {
  const { phone, address } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username }, // Use username to identify the user
      { phone, address },
      { new: true } // Return the updated user
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user); // Send updated user data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating user data", error: err.message });
  }
};