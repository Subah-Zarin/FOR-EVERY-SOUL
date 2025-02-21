import User from "../models/users.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Profile Fetch Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
