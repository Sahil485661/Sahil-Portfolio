import { NavLink } from "react-router-dom";
import profpic from "../assets/profile.png"
export default function HeroJunction() {
    
return (
<section className="max-w-6xl mx-auto px-4 pt-16 lg:pt-24 pb-12 grid lg:grid-cols-2 items-center gap-10">
<div>
<p className="text-lg text-neutral-300 mb-2">Hello, I'm</p>
<h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
<span className="text-emerald-500">Sahil Vishwakarma</span>
<span className="ml-3">👋</span>
</h1>
<h2 className="text-3xl md:text-4xl font-extrabold mt-3">Fullstack Developer</h2>
<p className="text-neutral-300 mt-6 leading-relaxed max-w-xl">
A passionate Full‑Stack Developer turning ideas into reality with clean code and creative solutions. Whether it's a sleek UI or a robust backend, I bring precision to every project.
</p>
<div className="flex gap-4 mt-8">
<NavLink to={"/work"} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]">Projects</NavLink>
<NavLink to={"/resume"} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 text-emerald-300 px-5 py-3 font-semibold hover:bg-emerald-400/10">Resume</NavLink>
</div>
</div>


<div className="flex justify-center">
<div className="relative">
<img src={profpic} alt="profile" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-emerald-500" />
<span className="absolute -z-10 -inset-4 rounded-full blur-3xl bg-emerald-500/10" />
</div>
</div>
</section>
);
}