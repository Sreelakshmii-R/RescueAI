import { Link } from "react-router-dom";


export default function Hero(){

return (

<section className="px-6 py-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


<div>


<p className="text-sm font-medium text-zinc-500">
AI-Powered Emergency Assistance
</p>


<h1 className="mt-5 text-5xl font-bold leading-tight text-zinc-900">

Faster emergency decisions
with intelligent AI support.

</h1>


<p className="mt-6 text-lg text-zinc-600 leading-relaxed">

RescueAI analyzes symptoms and provides
instant emergency guidance, first-aid steps,
and recommended actions when every second matters.

</p>



<div className="mt-8 flex gap-4">


<Link
to="/assessment"
className="rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium"
>

Start Assessment

</Link>


</div>


</div>





<div className="rounded-3xl bg-white p-8 shadow-sm border">


<div className="rounded-2xl bg-red-50 p-6">


<p className="text-sm text-red-600">
Emergency Intelligence
</p>


<h2 className="mt-3 text-3xl font-bold">
AI Triage Assistant
</h2>


<p className="mt-4 text-zinc-600">

Analyze symptoms.
Understand urgency.
Take informed action.

</p>


</div>


<div className="mt-5 space-y-3">


<div className="rounded-xl border p-4">
✓ Symptom Analysis
</div>


<div className="rounded-xl border p-4">
✓ Emergency Guidance
</div>


<div className="rounded-xl border p-4">
✓ AI Generated Report
</div>


</div>


</div>


</div>

</section>

);

}