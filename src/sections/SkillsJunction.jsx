         export default function SkillsJunction() {
  const frontend = [
   
    "React.js",
    "Axios",
    "Tailwind CSS",
    "JavaScript",
   "GSAP",
    "Redux",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Figma",
    "Problem Solving",
  ];

  const backend = [
  
    "Node.js",
    "REST API",
    "MongoDB",
    "Mongoose",
    "Express.js",
    "Firebase",
    "Socket.io",
    "Authentication",
    "Authrization",
    "Refresh Token",
    "Session handling",
    "MySQL",
    "PHP",
    "Cloudinary",
    "Nodemailer",
    "ImageKit",
    "Postman",
    "Brono",
    "bcrypt",
    "Supabase",
     "JWT",
  ];

  const totalTech = frontend.length + backend.length; // e.g., 33+

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Section badge */}
      <div className="flex items-center gap-4 justify-center mb-10">
        <div className="h-px flex-1 bg-emerald-500/20" />
        <span className="rounded-full bg-emerald-600 text-white px-5 py-2.5 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]">
          My Skills
        </span>
        <div className="h-px flex-1 bg-emerald-500/20" />
      </div>

      {/* Two panels */}
      <div className="grid md:grid-cols-2 gap-8">
        <SkillPanel title="Frontend" items={frontend} />
        <SkillPanel title="Backend" items={backend} />
      </div>

      {/* Stats row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <Stat kpi={`${totalTech}+`} label="Technologies" />
        <Stat kpi="2" label="Categories" />
        <Stat kpi="∞" label="Learning Opportunities" className="hidden md:flex" />
      </div>
    </section>
  );
}

function SkillPanel({ title, items }) {
  return (
    <article className="relative rounded-3xl border border-emerald-500/20 bg-[#141a22] p-6 md:p-8 shadow-[0_0_0_1px_rgba(16,185,129,0.10),0_0_40px_rgba(16,185,129,0.10)]">
      {/* tiny corner dots */}
      <span className="absolute left-3 bottom-3 h-2 w-2 rounded-full bg-emerald-400/70" />
      <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-400/40" />

      <header className="flex items-center gap-3">
        <span className="h-6 w-1 bg-emerald-500 rounded" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </header>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
        {items.map((s) => (
          <li
            key={s}
            className="rounded-full border border-emerald-500/15 bg-[#0f1620] px-4 py-2 text-sm text-neutral-300 text-center hover:border-emerald-400/40 hover:text-emerald-200 transition-colors"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Stat({ kpi, label, className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-3xl font-extrabold text-emerald-400">{kpi}</div>
      <div className="text-neutral-400 mt-1">{label}</div>
    </div>
  );
}
