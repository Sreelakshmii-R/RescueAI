import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">
        <p className="text-zinc-500">
          No assessment data available.
        </p>
      </div>
    );
  }
  


  const severityStyle = {
    Low: "bg-green-50 text-green-700 border-green-200",
    Moderate: "bg-yellow-50 text-yellow-700 border-yellow-200",
    High: "bg-orange-50 text-orange-700 border-orange-200",
    Critical: "bg-red-50 text-red-700 border-red-200",
  };


  return (
    <div className="min-h-screen bg-[#FAFAF9] py-12 px-5">

      <div className="max-w-5xl mx-auto">


        <h1 className="text-3xl font-bold text-zinc-900">
          Emergency Assessment Report
        </h1>

        <p className="mt-2 text-zinc-500">
          AI-powered emergency guidance based on provided symptoms.
        </p>



        {/* Severity Card */}
        <div
        className={`mt-8 rounded-3xl border p-8 ${
            severityStyle[state.severity] ||
            "bg-zinc-50 border-zinc-200"
        }`}
        >

        <p className="text-sm font-medium text-zinc-600">
            Emergency Level
        </p>

        <div className="mt-4 flex items-center gap-4">

            <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
                state.severity === "Critical"
                ? "bg-red-100 text-red-700"
                : state.severity === "High"
                ? "bg-orange-100 text-orange-700"
                : state.severity === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
            >
            {state.severity}
            </span>

            <p className="text-sm text-zinc-500">
            Generated on {new Date().toLocaleString()}
            </p>

        </div>

        </div>

        {/* Patient Summary */}

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

        <h3 className="text-lg font-semibold text-zinc-900">
            👤 Patient Summary
        </h3>

        <p className="mt-3 text-zinc-600">
            {state.patientSummary}
        </p>

        </div>

        {/* AI Reasoning */}

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

        <h3 className="text-lg font-semibold text-zinc-900">
            🧠 Why This Assessment?
        </h3>

        <p className="mt-3 leading-7 text-zinc-600">
            {state.reasoning}
        </p>

        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

                <h3 className="font-semibold text-zinc-900">
                🎯 AI Confidence
                </h3>

                <p className="mt-3 text-lg font-bold">
                {state.confidence}
                </p>

            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

                <h3 className="font-semibold text-zinc-900">
                ⏱ Recommended Urgency
                </h3>

                <p className="mt-3 text-lg font-bold">
                {state.urgency}
                </p>

            </div>

        </div>


        {/* Possible Conditions */}

        <section className="mt-8 bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-xl font-bold">
            Possible Conditions
          </h2>

          <p className="text-sm text-zinc-500 mt-1">
            AI-generated possibilities, not medical diagnosis.
          </p>


          <div className="mt-5 space-y-4">

            {state.possibleConditions?.map(
              (item,index)=>(
                
              <div
                key={index}
                className="rounded-2xl border p-5"
              >

                <div className="flex justify-between">

                  <h3 className="font-semibold">
                    {item.condition}
                  </h3>

                  <span className="font-bold">
                    {item.confidence}%
                  </span>

                </div>


                <div className="mt-3 h-2 rounded-full bg-zinc-200">

                  <div
                    className="h-2 rounded-full bg-[#007AFF]"
                    style={{
                      width:`${item.confidence}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </section>




        {/* First Aid */}

        <section className="mt-8 bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-xl font-bold">
            Immediate First Aid
          </h2>


          <ul className="mt-5 space-y-3">

            {state.firstAid?.map(
              (item,index)=>(
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <span className="text-green-600">
                    ✓
                  </span>

                  {item}

                </li>
              )
            )}

          </ul>

        </section>




        {/* Avoid */}

        <section className="mt-8 bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-xl font-bold">
            Things To Avoid
          </h2>


          <ul className="mt-5 space-y-3">

            {state.avoid?.map(
              (item,index)=>(
                <li
                  key={index}
                  className="flex gap-3"
                >

                  <span className="text-red-500">
                    !
                  </span>

                  {item}

                </li>
              )
            )}

          </ul>

        </section>




        {/* Recommendation */}

        <section className="mt-8 rounded-3xl bg-zinc-900 text-white p-8">

          <h2 className="text-xl font-bold">
            Recommended Action
          </h2>


          <p className="mt-4 text-zinc-300 leading-relaxed">
            {state.recommendation}
          </p>

        </section>

       {/* Emergency Timeline */}

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

        <h3 className="mb-6 text-xl font-bold text-zinc-900">
            🚨 Emergency Timeline
        </h3>

        <div className="space-y-5">

            {state.timeline?.map((step, index) => (

            <div
                key={index}
                className="flex gap-4"
            >

                <div className="flex flex-col items-center">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {index + 1}
                </div>

                {index !== state.timeline.length - 1 && (
                    <div className="mt-2 h-12 w-1 bg-red-200"></div>
                )}

                </div>

                <div>

                <h4 className="font-semibold text-red-600">
                    {step.time}
                </h4>

                <p className="mt-1 text-zinc-600">
                    {step.action}
                </p>

                </div>

            </div>

            ))}

        </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-4">

            <a
                href="https://www.google.com/maps/search/hospitals+near+me"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
                🏥 Find Nearby Hospitals
            </a>

            

            <button
                onClick={() => navigate("/assessment")}
                className="rounded-xl border border-zinc-300 px-6 py-3 font-medium transition hover:bg-zinc-100"
            >
                New Assessment
            </button>

        </div>

        {/* Emergency Notice */}

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">

            <h3 className="font-semibold text-red-700">
                🚨 Emergency Notice
            </h3>

            <p className="mt-2 text-sm text-red-600">
                If the patient is experiencing severe chest pain, difficulty breathing,
                heavy bleeding, unconsciousness, or any life-threatening symptoms,
                contact your local emergency services immediately.
                RescueAI provides AI-assisted guidance and is not a substitute for
                professional medical care.
            </p>

        </div>



        {/* Disclaimer */}

        <p className="mt-8 text-sm text-zinc-500 text-center">
          {state.disclaimer}
        </p>


      </div>

    </div>
  );
}