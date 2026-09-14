import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const socials = [
  { icon: Github,      href: "https://github.com/ShryCreates",                       label: "GitHub"   },
  { icon: Linkedin,    href: "https://www.linkedin.com/in/shreya-kumari-24a249333/", label: "LinkedIn" },
  { icon: Mail,        href: "mailto:shry1012005@gmail.com",                         label: "Email"    },
  { icon: LeetCodeIcon,href: "https://leetcode.com/u/Shry_Kri/",                     label: "LeetCode" },
];

const navLinks = [
  { label: "Home",       href: "#"           },
  { label: "About",      href: "#about"      },
  { label: "Work",       href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="text-2xl font-black text-white hover:text-[#F26522] transition-colors duration-200"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Shreya<span className="text-[#F26522]">.</span>
            </a>
            <p className="text-[#6B6B6B] text-xs mt-1">Software Engineer · Full-Stack · AI/ML</p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#6B6B6B] hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-[#6B6B6B] hover:bg-[#F26522] hover:text-white transition-all duration-300"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B6B6B] text-xs">
            © {new Date().getFullYear()} Shreya Kumari. All rights reserved.
          </p>
          <p className="text-[#6B6B6B] text-xs">
            Designed &amp; Built with{" "}
            <span className="text-[#F26522]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
