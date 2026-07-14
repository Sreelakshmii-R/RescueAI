export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Describe Symptoms",
      description:
        "Enter patient details, symptoms, duration, and pain level through a simple assessment."
    },
    {
      number: "02",
      title: "AI Emergency Analysis",
      description:
        "RescueAI analyzes the information using AI models to estimate urgency and provide guidance."
    },
    {
      number: "03",
      title: "Get Actionable Guidance",
      description:
        "Receive emergency level, first-aid steps, precautions, and recommended next actions."
    }
  ];


  return (

    <section className="px-6 py-20">

      <div className="mx-auto max-w-6xl">


        <div className="text-center">

          <p className="text-sm text-zinc-500 font-medium">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900">
            Emergency support in three simple steps
          </h2>

        </div>



        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {steps.map((step)=>(

            <div
              key={step.number}
              className="rounded-3xl bg-white border border-zinc-100 p-8 shadow-sm"
            >

              <div className="text-sm font-semibold text-zinc-400">
                {step.number}
              </div>


              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>


              <p className="mt-4 leading-relaxed text-zinc-600">
                {step.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>

  );
}