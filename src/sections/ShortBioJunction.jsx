export default function ShortBioJunction() {
return (
<section className="max-w-6xl mx-auto px-4 py-16">
<div className="flex items-center gap-4 justify-center mb-10">
<div className="h-px flex-1 bg-emerald-500/20" />
<span className="rounded-full bg-emerald-600 text-white px-5 py-2.5 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]">Short Bio</span>
<div className="h-px flex-1 bg-emerald-500/20" />
</div>


<div className="text-neutral-300 max-w-4xl mx-auto leading-8">
Hello, I'm <span className="text-emerald-400 font-semibold">Sahil Vishwakarma</span>, a <span className="text-emerald-400 font-semibold">
Fullstack Developer</span> based in India. I specialize in building scalable web applications, love learning new skills, and enjoy 
collaborating with like‑minded people to create something exciting that makes a difference.
</div>


<div className="flex flex-wrap gap-3 mt-8 justify-start">
{[
"📍 India",
"🎓 B.Tech(CS)",
"🛠 Full Stack Developer",
].map((chip) => (
<span key={chip} className="rounded-full border border-emerald-500/20 bg-[#121821] px-4 py-2 text-emerald-300">{chip}</span>
))}
</div>
</section>
);
}