import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoutes from "./routes/analyzeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", (req, res, next) => {
  console.log("📥 Request reached /api/analyze");
  next();
});

app.use("/api/analyze", analyzeRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "RescueAI API Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});