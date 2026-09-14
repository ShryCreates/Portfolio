import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Home",       href: "#"            },
  { label: "About",      href: "#about"       },
  { label: "Work",       href: "#projects"    },
  { label: "Skills",     href: "#skills"      },
  { label: "Experience", href: "#experience"  },
  { label: "Contact",    href: "#contact"     },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EDE8DF]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black tracking-tight text-[#1A1A1A] hover:text-[#F26522] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Shreya<span className="text-[#F26522]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] relative group transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#F26522] rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 bg-[#1A1A1A] text-white text-sm font-semibold rounded-full hover:bg-[#F26522] transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#EDE8DF] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open
            ? <X    className="w-5 h-5 text-[#1A1A1A]" />
            : <Menu className="w-5 h-5 text-[#1A1A1A]" />
          }
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F2] border-t border-[#EDE8DF] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[#1A1A1A] hover:text-[#F26522] py-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-[#1A1A1A] text-white text-sm font-semibold rounded-full text-center hover:bg-[#F26522] transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
