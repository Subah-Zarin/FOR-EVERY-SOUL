import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./middlewares/logger.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import campaignRoutes from "./routes/campaigns.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import donationRoutes from './routes/donationRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*"; // Default: allow all origins

// ✅ Improved MongoDB connection handling
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ALLOWED_ORIGIN, // Ensure ALLOWED_ORIGIN is properly set in .env
  })
);
app.use(logger); // Custom logging middleware

// ✅ Root API test route
app.get("/", (req, res) => res.json({ message: "API is working 🚀" }));

// ✅ Correctly registered API routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/api/campaigns", campaignRoutes);
app.use("/api", volunteerRoutes);
app.use("/api/Donation", donationRoutes); // Changed "/api" to "/api/volunteers" to avoid conflicts

// ✅ Handle 404 (Not Found) errors
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
