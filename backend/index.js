import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./middlewares/logger.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import campaignRoutes from "./routes/campaigns.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error connecting to database: ${err}`));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN,
  })
);

// Custom logging middleware
app.use(logger);

app.get("/", (req, res) => res.json({ message: "API is working" }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/api/campaigns", campaignRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
