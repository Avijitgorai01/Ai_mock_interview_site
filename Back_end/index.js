import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to AI Mock Interview Server");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectDb();
});
