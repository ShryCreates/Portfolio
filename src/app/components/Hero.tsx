import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

// LeetCode SVG icon
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// Decorative star SVG
const Star = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z"
      fill="currentColor"
    />
  </svg>
);

const floatingBadges = [
  { label: "React",      top: "4%",  left: "6%",  delay: 0   },
  { label: "Node.js",    top: "18%", right: "2%", delay: 0.4 },
  { label: "Python",     top: "55%", left: "0%",  delay: 0.8 },
  { label: "AI/ML + Cybersecurity",      top: "72%", right: "1%", delay: 0.6 },
  { label: "JavaScript", top: "38%", right: "0%", delay: 1.0 },
  { label: "C++",        top: "88%", left: "5%",  delay: 0.3 },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#FAF7F2] pt-24 pb-16">

      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large orange blob top-right */}
        <motion.div
          className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F26522 0%, #FF8C42 60%, transparent 100%)" }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft beige blob bottom-left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #EDE8DF 0%, #FAF7F2 100%)" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Decorative dots grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#1A1A1A 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FDE8D8] text-[#F26522] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#F26522]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
              Open to Opportunities
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-[#6B6B6B] uppercase mb-3">
                Hi, I'm
              </p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-[#1A1A1A] mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                SHREYA
              </h1>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span className="text-[#F26522]">KUMARI</span>
              </h1>
            </motion.div>

            {/* Role pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["Software Engineer", "Full-Stack Developer", "AI/ML Enthusiast"].map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 bg-[#1A1A1A] text-white text-xs font-semibold rounded-full"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-base lg:text-lg text-[#6B6B6B] mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              I build scalable full-stack applications and AI-powered solutions, with a focus on backend engineering, intelligent systems, and real-world problem solving.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-[#F26522] text-white text-sm font-bold rounded-full hover:bg-[#d95510] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 bg-transparent text-[#1A1A1A] text-sm font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { href: "https://github.com/ShryCreates",                         icon: Github,      label: "GitHub"   },
                { href: "https://www.linkedin.com/in/shreya-kumari-24a249333/",   icon: Linkedin,    label: "LinkedIn" },
                { href: "mailto:shry1012005@gmail.com",                           icon: Mail,        label: "Email"    },
                { href: "https://leetcode.com/u/Shry_Kri/",                       icon: LeetCodeIcon, label: "LeetCode"},
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EDE8DF] text-[#6B6B6B] hover:bg-[#F26522] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex items-center gap-0 mt-10 border border-[#EDE8DF] rounded-2xl overflow-hidden w-fit"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              {[
                { value: "8.36/10",  label: "CPI · 5 Semesters"               },
                { value: "3",     label: "Featured Projects"  },
                { value: "SIH 2025",   label: "National Finalist"  },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-6 py-4 text-center ${
                    i !== 2 ? "border-r border-[#EDE8DF]" : ""
                  } ${i === 1 ? "bg-[#F26522]" : "bg-white"}`}
                >
                  <div className={`text-xl font-black leading-none mb-0.5 ${i === 1 ? "text-white" : "text-[#1A1A1A]"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-[10px] font-semibold tracking-wide uppercase ${i === 1 ? "text-white/80" : "text-[#9A9A9A]"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Floating tech badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className="absolute z-20 px-3 py-1.5 bg-white text-[#1A1A1A] text-xs font-semibold rounded-full shadow-md border border-[#EDE8DF] whitespace-nowrap"
                style={{
                  top: badge.top,
                  left: (badge as any).left,
                  right: (badge as any).right,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + badge.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
              >
                {badge.label}
              </motion.div>
            ))}

            {/* Portrait frame */}
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-[26rem] lg:h-[30rem]">

              {/* Organic orange blob — sits behind the photo */}
              <motion.div
                className="absolute -inset-3 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-[#F26522]"
                animate={{
                  borderRadius: [
                    "60% 40% 55% 45% / 50% 60% 40% 50%",
                    "45% 55% 40% 60% / 60% 40% 55% 45%",
                    "55% 45% 60% 40% / 45% 55% 50% 50%",
                    "60% 40% 55% 45% / 50% 60% 40% 50%",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Cream inset ring — creates a thin border gap between blob and photo */}
              <div className="absolute inset-2 rounded-[55%_45%_50%_50%/48%_55%_45%_52%] bg-[#FAF7F2]" />

              {/* Photo — chest-up crop, face centred */}
              <motion.div
                className="absolute inset-3 rounded-[52%_48%_48%_52%/46%_52%_48%_54%] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src="/Shreya.png"
                  alt="Shreya Kumari"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </motion.div>

              {/* Edu badge — bottom-left, clear of the face */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-[#1A1A1A] text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg z-20 whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                B.Tech CSIT · 2027
              </motion.div>

              {/* CPI badge — top-right, clear of the face */}
              <motion.div
                className="absolute -top-5 -right-5 bg-[#F26522] text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg z-20 whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                8.36 CPI
              </motion.div>

              {/* Decorative stars */}
              <Star size={14} className="absolute top-4 left-14 text-[#1A1A1A] opacity-30 animate-spin-slow" />
              <Star size={10} className="absolute bottom-10 right-3 text-[#F26522] opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-[#9A9A9A] hover:text-[#F26522] transition-colors duration-200 group"
          >
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
