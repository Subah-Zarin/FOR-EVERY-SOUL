import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";  // Correct import



// Registration controller: collects firstName, lastName, email, and password.
export const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a user with the same email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with provided email already exists" });
    }

    // Automatically generate a unique username from firstName and lastName
    const baseUsername = `${firstName}${lastName}`.toLowerCase().replace(/\s+/g, '');
    let username = baseUsername;
    let count = 0;
    while (await User.findOne({ username })) {
      count++;
      username = baseUsername + count;
    }

    // Hash the password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login controller: accepts username and password.
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "Please provide username and password" });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // Create a JWT token (ensure you have JWT_SECRET in your .env file)
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Optionally, set the token in an HTTP-only cookie
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
