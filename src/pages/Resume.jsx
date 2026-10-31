import ContectJuntion from "../sections/ContactJunction";
export default function Resume() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-32 mb-16 h-[600px]">
      <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
      <p className="text-neutral-400 mt-4">
       Hi there! You can view my resume by clicking the button below.
      </p>

      {/* Replace href with your actual resume URL */}
      <a
        href="/Sahil_Resume.pdf"
      /*download="Sahil_Resume.pdf"*/
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-semibold shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]"
      >
        View Resume
      </a>
      
    </section>
    
  );
}
