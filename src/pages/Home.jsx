import HeroJunction from "../sections/HeroJunction.jsx";
import ShortBioJunction from "../sections/ShortBioJunction.jsx";
import SkillsJunction from "../sections/SkillsJunction.jsx";
import WorkJunction from "../sections/WorkJunction.jsx";
import ContactJunction from "../sections/ContactJunction.jsx";

// pages/Home.jsx
export default function Home() {
  return (
    <main className="w-full flex flex-col pt-20">
      {/* Hero */}
      <section id="home" className="w-full scroll-mt-28">
        <HeroJunction />
      </section>

      {/* Middle sections - inme container width chalegi */}
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col gap-24 my-20">
        <section id="about" className="scroll-mt-28"><ShortBioJunction /></section>
        <section id="skills" className="scroll-mt-28"><SkillsJunction /></section>
        <section id="work" className="scroll-mt-28"><WorkJunction /></section>
      </div>

      {/* Contact - ye container ke BAHAR hai taaki screen ki 100% width le sake */}
      <section id="contact" className="w-full scroll-mt-28">
        <ContactJunction />
      </section>
    </main>
  );
}