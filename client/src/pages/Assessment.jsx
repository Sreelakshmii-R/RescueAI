import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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




            <div>

              <label className="text-sm font-medium">
                Symptoms
              </label>

              <textarea
                name="symptoms"
                rows="5"
                onChange={handleChange}
                placeholder="Describe symptoms clearly..."
                className="mt-2 w-full rounded-xl border p-4"
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




            <div>

              <label className="text-sm font-medium">
                Existing Medical Conditions
              </label>


              <textarea
                name="conditions"
                rows="3"
                onChange={handleChange}
                placeholder="Optional"
                className="mt-2 w-full rounded-xl border p-4"
              />

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