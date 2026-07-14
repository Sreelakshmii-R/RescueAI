export default function Footer() {

  return (

    <footer className="border-t border-zinc-200 bg-white px-6 py-10">

      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-6">


        <div>

          <h2 className="font-bold text-zinc-900">
            RescueAI
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            AI-powered emergency assistance platform.
          </p>

        </div>



        <div className="text-sm text-zinc-500">

          <p>
            Built for NxtWave AI Hackathon 2026
          </p>

          <p className="mt-2">
            AI assistance is not a replacement for professional medical advice.
          </p>

        </div>


      </div>


    </footer>

  );

}