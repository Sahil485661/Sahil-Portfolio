import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar({ links = [] }) {
  // Expecting: [Skills, My Work, About, Resume, Contact]
  const { pathname } = useLocation();

  // Scroll to top on route change (SPA UX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const baseItem =
    "px-4 py-3 text-sm sm:text-base font-semibold tracking-wide text-neutral-300 hover:text-white transition-colors";
  const activeItem = "text-white";

  return (
    <header className="w-full pt-5">
      <nav className="max-w-6xl mx-auto px-4">
        {/* Pill container with subtle emerald border/glow */}
        <div className="w-full rounded-full border bg-[#0c121a]/95 border-emerald-400/20 backdrop-blur shadow-[0_0_0_1px_rgba(16,185,129,0.10),0_0_30px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between px-2 sm:px-6">
            {/* Left: Skills | My Work | About | Resume */}
            <ul className="flex items-center gap-2 sm:gap-6 py-2 overflow-x-auto no-scrollbar">
              {links.slice(0, 3).map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${baseItem} ${isActive ? activeItem : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}

              {/* Resume with tiny doc icon */}
              {links[4] && (
                <li>
                  <NavLink
                    to={links[4].to}
                    className={({ isActive }) =>
                      `${baseItem} inline-flex items-center gap-2 ${isActive ? activeItem : ""}`
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                    <span>{links[4].label}</span>
                  </NavLink>
                </li>
              )}
            </ul>

            {/* Right: Contact button */}
            <div className="py-2">
              {links[5] && (
                <NavLink
                  to={links[5].to}
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center gap-2 rounded-full",
                      "bg-emerald-600 hover:bg-emerald-500",
                      "text-white px-4 sm:px-5 py-2.5 font-semibold",
                      "transition-colors",
                      "shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_8px_20px_rgba(16,185,129,0.35)]",
                      isActive ? "ring-2 ring-emerald-400/50" : "",
                    ].join(" ")
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6" />
                    <path d="M2 7l9.06 5.66a2 2 0 0 0 1.88 0L22 7" />
                    <path d="M2 7h20" />
                  </svg>
                  <span>{links[5].label || "Contact"}</span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* Optional CSS (place in src/index.css) to hide mobile scrollbar:
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
*/
