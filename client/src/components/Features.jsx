export default function Features(){

const features = [

{
  title:"AI Emergency Triage",
  text:"Analyzes symptoms and estimates urgency levels using artificial intelligence."
},

{
  title:"Instant Guidance",
  text:"Provides immediate first-aid suggestions, precautions, and recommended actions."
},

{
  title:"Emergency Reports",
  text:"Generates structured assessment reports with severity level, possible risks, and next steps."
}

];

return (

<section className="bg-white px-6 py-20">


<div className="mx-auto max-w-6xl">


<div className="text-center">

<p className="text-sm text-zinc-500 font-medium">
FEATURES
</p>

<h2 className="mt-3 text-3xl font-bold">
Built for faster emergency decisions
</h2>

</div>



<div className="mt-12 grid gap-6 md:grid-cols-3">


{
features.map((feature,index)=>(

<div
key={index}
className="rounded-3xl border p-8"
>

<h3 className="text-xl font-bold">
{feature.title}
</h3>


<p className="mt-4 text-zinc-600 leading-relaxed">
{feature.text}
</p>


</div>

))
}


</div>


</div>


</section>

);

}