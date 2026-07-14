import { useLocation } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();

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

          <p className="text-sm font-medium">
            Emergency Level
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {state.severity}
          </h2>

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



        {/* Disclaimer */}

        <p className="mt-8 text-sm text-zinc-500 text-center">
          {state.disclaimer}
        </p>


      </div>

    </div>
  );
}