import triagePrompt from "../prompts/triagePrompt.js";
import { analyzeWithGroq } from "../services/groqService.js";

export async function analyzeSymptoms(req, res) {

    try {

        const prompt = triagePrompt(req.body);

        const response = await analyzeWithGroq(prompt);

        res.json(JSON.parse(response));

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Failed to analyze symptoms."
        });

    }

}