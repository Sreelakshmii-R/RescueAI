import express from "express";
import { analyzeSymptoms } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyzeSymptoms);

export default router;