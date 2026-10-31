export default function ContactJunction() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1420] to-[#0f1b26]" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Section Title */}
        <div className="flex items-center gap-4 justify-center mb-10">
          <div className="h-px flex-1 bg-emerald-500/20" />
          <span className="rounded-full bg-emerald-600 text-white px-5 py-2.5 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]">
            Get in Touch
          </span>
          <div className="h-px flex-1 bg-emerald-500/20" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="mailto:vishwakarmasahil762@gmail.com"
            className="group rounded-2xl border border-emerald-500/20 bg-[#101822] p-8 hover:border-emerald-400/40 transition-colors"
          >
            <div className="text-2xl font-semibold ">Email</div>
            <div className="text-emerald-300 mt-2 font-thin">vishwakarmasahil762@gmail.com</div>
          </a>

          <a
            href="https://github.com/Sahil485661"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-emerald-500/20 bg-[#101822] p-8 hover:border-emerald-400/40 transition-colors"
          >
            <div className="text-2xl font-semibold">GitHub</div>
            <div className="text-neutral-300 mt-2">Sahil485661</div>
          </a>

          <a
            href="https://x.com/Sahil_Vishwakma"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-emerald-500/20 bg-[#101822] p-8 hover:border-emerald-400/40 transition-colors"
          >
            <div className="text-2xl font-semibold">X (Twitter)</div>
            <div className="text-neutral-300 mt-2">@Sahil_Vishwakma</div>
          </a>

          <div className="rounded-2xl border border-emerald-500/20 bg-[#101822] p-8">
            <div className="text-2xl font-semibold">Phone</div>
            <div className="text-neutral-300 mt-2">7067163890</div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
            Let’s Build Something Great Together 🚀
          </h2>
          <a
            href="mailto:vishwakarmasahil762@gmail.com"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]"
          >
            Start Conversation →
          </a>
        </div>
      </div>
    </div>
  );
}
