import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const commonSymptoms = [
  "Chest Pain",
  "Fever",
  "Headache",
  "Cough",
  "Vomiting",
  "Nausea",
  "Dizziness",
  "Shortness of Breath",
  "Fatigue",
  "Abdominal Pain",
  "Back Pain",
  "Bleeding",
  "Burn",
  "Seizure",
  "Unconsciousness"
];

const medicalConditions = [
  "Diabetes",
  "Hypertension",
  "Heart Disease",
  "Asthma",
  "Pregnancy",
  "Allergies"
];

export default function Assessment() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: "",
    duration: "",
    painLevel: 5,
    conditions: "",
  });

  const [selectedConditions, setSelectedConditions] = useState([]);

  const recognitionRef = useRef(null);

  const startListening = () => {

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {

    const transcript = event.results[0][0].transcript;

    setFormData((prev) => ({
      ...prev,
      symptoms: transcript,
    }));

  };

  recognition.onerror = () => {
    alert("Unable to recognize speech.");
  };

  recognition.start();

  recognitionRef.current = recognition;

};
  
  const addSymptom = (symptom) => {
    const current = formData.symptoms
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

    if (!current.includes(symptom)) {
        setFormData({
        ...formData,
        symptoms: [...current, symptom].join(", "),
        });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/analyze`,
        formData
      );


      navigate("/result", {
        state: res.data
      });


    } catch(err) {

      console.log(err);
      alert("Unable to analyze. Please try again.");

    }
    finally {

      setLoading(false);

    }

  };
   
  const toggleCondition = (condition) => {
    setSelectedConditions((prev) => {
        const updated = prev.includes(condition)
        ? prev.filter((item) => item !== condition)
        : [...prev, condition];

        setFormData((current) => ({
        ...current,
        conditions: updated.join(", "),
        }));

        return updated;
    });
 };

  return (

    <div className="min-h-screen bg-[#FAFAF9] px-5 py-12">


      <div className="max-w-3xl mx-auto">


        <div className="mb-8">

          <h1 className="text-4xl font-bold text-zinc-900">
            Emergency Assessment
          </h1>

          <p className="mt-3 text-zinc-500">
            Provide your symptoms and receive AI-powered emergency guidance.
          </p>

        </div>



        <div className="rounded-3xl bg-white p-8 shadow-sm border border-zinc-100">


          <div className="mb-8 rounded-2xl bg-red-50 p-5">

            <h3 className="font-semibold text-red-700">
              Emergency Notice
            </h3>

            <p className="mt-2 text-sm text-red-600">
              For life-threatening emergencies, contact local emergency services immediately.
            </p>

          </div>



          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >



            <div className="grid md:grid-cols-2 gap-5">


              <div>
                <label className="text-sm font-medium">
                  Age
                </label>

                <input
                  name="age"
                  type="number"
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter age"
                />

              </div>



              <div>

                <label className="text-sm font-medium">
                  Gender
                </label>

                <select
                  name="gender"
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border p-4"
                >

                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>

                </select>

              </div>


            </div>


            <div className="mb-4">

                <label className="mb-3 block text-sm font-semibold text-zinc-700">
                    Common Symptoms
                </label>

                <div className="flex flex-wrap gap-3">

                    {commonSymptoms.map((symptom) => {

                    const selected = formData.symptoms.includes(symptom);

                    return (
                        <button
                        type="button"
                        key={symptom}
                        onClick={() => addSymptom(symptom)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                            selected
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-zinc-300 bg-white hover:border-red-400 hover:text-red-600"
                        }`}
                        >
                        {symptom}
                        </button>
                    );
                    })}

                </div>

                </div>

            <div>

                <label className="mb-2 block font-medium">
                    Symptoms
                </label>

                <div className="mb-3 flex justify-end">

                <button
                    type="button"
                    onClick={startListening}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    🎤 Speak Symptoms
                </button>

                </div>

                <textarea
                    rows={5}
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    placeholder="Describe symptoms..."
                    className="w-full rounded-xl border border-zinc-300 p-4"
                />

            </div>




            <div>

              <label className="text-sm font-medium">
                Duration
              </label>

              <input
                name="duration"
                onChange={handleChange}
                placeholder="Example: 3 hours"
                className="mt-2 w-full rounded-xl border p-4"
              />

            </div>




            <div>

              <div className="flex justify-between">

                <label className="text-sm font-medium">
                  Pain Level
                </label>

                <span className="text-sm text-zinc-500">
                  {formData.painLevel}/10
                </span>

              </div>


              <input
                type="range"
                min="1"
                max="10"
                name="painLevel"
                value={formData.painLevel}
                onChange={handleChange}
                className="mt-4 w-full"
              />


            </div>




            <div className="mt-6">

                <label className="mb-3 block text-sm font-semibold text-zinc-700">
                    Medical History
                </label>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

                    {medicalConditions.map((condition) => {

                    const active = selectedConditions.includes(condition);

                    return (
                        <button
                        key={condition}
                        type="button"
                        onClick={() => toggleCondition(condition)}
                        className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                            active
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-zinc-300 bg-white hover:border-red-400 hover:text-red-600"
                        }`}
                        >
                        {condition}
                        </button>
                    );

                    })}

                </div>

            </div>




            <button
              disabled={loading}
              className="w-full rounded-xl bg-[#1C1C1E] py-4 text-white font-semibold hover:opacity-90 transition"
            >

              {loading
              ? "Analyzing..."
              : "Analyze Emergency"}

            </button>


          </form>


        </div>


      </div>


    </div>

  );
}