import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

import serverless from "serverless-http";

// ==============================
// NOTE: Remove this in lambda deployment.
// ==============================
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ==============================
// MONGO CONNECTION
// ==============================
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

// ==============================
// COMMENT MODEL
// ==============================
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

// ==============================
// HEALTH CHECK ROUTE
// ==============================
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

// ==============================
// CONTACT FORM ROUTE
// ==============================
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// ==============================
// COMMENT ROUTES
// ==============================

// GET all comments
app.get("/comments", async (req, res) => {
  try {
    await connectToDatabase();
    const comments = await Comment.find().sort({ timestamp: -1 });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch comments." });
  }
});

// POST a new comment
app.post("/comments", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required." });

  try {
    await connectToDatabase();
    const newComment = new Comment({ name, email, message });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save comment." });
  }
});

// ==============================
// LAMBDA HANDLER
// ==============================
export const handler = serverless(app);

// // ==============================
// // SERVER START
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
