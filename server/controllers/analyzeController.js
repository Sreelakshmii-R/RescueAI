import triagePrompt from "../prompts/triagePrompt.js";
import { analyzeWithGroq } from "../services/groqService.js";

export async function analyzeSymptoms(req, res) {

    console.log("🚀 analyzeSymptoms called");

    try {
    const prompt = triagePrompt(req.body);

    const response = await analyzeWithGroq(prompt);

    console.log("RAW RESPONSE:");
    console.log(response);

    const parsed = JSON.parse(response);
    console.log(parsed);

    parsed.patientSummary ??=
  `${req.body.age}-year-old ${req.body.gender} reporting ${req.body.symptoms}. Symptoms have been present for ${req.body.duration}. Pain level reported: ${req.body.painLevel}/10.`;

parsed.reasoning ??=
  `The assessment was determined using the reported symptoms, duration, pain intensity, age, gender, and medical history.`;

parsed.confidence ??=
  parsed.possibleConditions?.[0]?.confidence >= 75
    ? "High"
    : parsed.possibleConditions?.[0]?.confidence >= 50
    ? "Medium"
    : "Low";

parsed.urgency ??=
  parsed.severity === "Critical"
    ? "Immediately"
    : parsed.severity === "High"
    ? "Within 30 Minutes"
    : parsed.severity === "Moderate"
    ? "Within a Few Hours"
    : "Monitor Symptoms";

parsed.timeline ??= [
  {
    time: "Immediately",
    action: parsed.firstAid?.[0] || "Follow first-aid guidance."
  },
  {
    time: "Next 5 Minutes",
    action: parsed.firstAid?.[1] || parsed.recommendation
  },
  {
    time: "Next Step",
    action: parsed.recommendation
  }
];

    // Default values for missing fields

    const severity = parsed.severity || "Moderate";

    const urgencyMap = {
      Critical: "Immediately",
      High: "Within 30 Minutes",
      Moderate: "Within a Few Hours",
      Low: "Monitor Symptoms",
    };

    const confidence =
      parsed.confidence ||
      (parsed.possibleConditions?.[0]?.confidence >= 80
        ? "High"
        : parsed.possibleConditions?.[0]?.confidence >= 50
        ? "Medium"
        : "Low");

    const patientSummary =
      parsed.patientSummary ||
      `Patient reports ${req.body.symptoms} for ${req.body.duration}. Pain level reported: ${req.body.painLevel}/10.`;

    const reasoning =
      parsed.reasoning ||
      `The severity assessment is based on the reported symptoms, duration, pain level, and medical history provided by the user.`;

    const urgency = parsed.urgency || urgencyMap[severity];

    const timeline =
      parsed.timeline || [
        {
          time: "Immediately",
          action: parsed.firstAid?.[0] || "Follow first-aid guidance."
        },
        {
          time: "Next 30 Minutes",
          action: parsed.recommendation || "Seek medical attention."
        },
        {
          time: "After Medical Evaluation",
          action: "Follow the advice of qualified healthcare professionals."
        }
      ];

    res.json({
      ...parsed,
      severity,
      patientSummary,
      reasoning,
      confidence,
      urgency,
      timeline
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to analyze symptoms."
    });
  }
}