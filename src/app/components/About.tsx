import { motion } from "motion/react";
import { GraduationCap, Code, Brain, Zap } from "lucide-react";

const Star = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" />
  </svg>
);

const stats = [
  { value: "5+",     label: "Projects & Applications"      },
  { value: "8.36",   label: "CPI Score"            },
  { value: "6+",     label: "Achievements & Certifications"         },
  { value: "2027",   label: "Graduating Year"      },
];

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "MERN stack, REST APIs, authentication and database-driven applications.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: Brain,
    title: "AI/ML Engineering",
    description: "Machine learning, LLM integration, intelligent systems and AI-powered solutions.",
    tags: ["Python", "PyTorch", "LLMs", "Ollama"],
  },
  {
    icon: Zap,
    title: "DSA & Problem Solving",
    description: "Strong foundation in data structures, algorithms and analytical thinking.",
    tags: ["C++", "Java", "Algorithms", "Big-O"],
  },
  {
    icon: GraduationCap,
    title: "Backend & System Design",
    description: "REST APIs, database design, system architecture and backend development.",
    tags: ["REST", "JWT", "SQL", "DBMS"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #F26522 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-12 bg-[#F26522]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">About Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-14 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Crafting Code,
          <br />
          <span className="text-[#F26522]">Solving Problems.</span>
        </motion.h2>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — bio + education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[17px] text-[#6B6B6B] mb-5 leading-relaxed">
              I'm a Software Engineer focused on full-stack development and AI/ML, with hands-on experience building scalable web applications and intelligent software solutions. I work across modern frontend, backend, database, and AI technologies to turn complex problems into practical products.
            </p>
            <p className="text-[17px] text-[#6B6B6B] mb-8 leading-relaxed">
              With a strong foundation in data structures, algorithms, system design, and software development, I approach problems analytically and build solutions with a focus on reliability, scalability, and real-world impact.
            </p>

            {/* Education card */}
            <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 relative overflow-hidden mb-6">
              <Star size={14} className="absolute top-4 right-6 text-[#F26522] opacity-60" />
              <Star size={8}  className="absolute bottom-4 right-16 text-white opacity-30" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F26522] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#F26522] uppercase mb-1">Education</p>
                  <h3 className="text-lg font-bold text-white mb-0.5">B.Tech in Computer Science & IT</h3>
                  <h4 className="text-sm font-semibold text-gray-300 mb-1">Sagar Institute of Research and Technology, Bhopal</h4>
                  <p className="text-sm text-[#9A9A9A] mb-2">2023 – 2027</p>
                  <span className="inline-block px-3 py-1 bg-[#F26522]/20 text-[#F26522] text-xs font-bold rounded-full border border-[#F26522]/30">
                    CPI: 8.36/10
                  </span>
                </div>
              </div>
            </div>

            {/* What I Bring */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#F26522]" />
                <span className="text-[10px] font-black tracking-[0.2em] text-[#F26522] uppercase">What I Bring</span>
                <Star size={8} className="text-[#F26522] opacity-50" />
              </div>
              <p className="text-sm font-bold text-[#1A1A1A] mb-1">Build. Solve. Learn.</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                I enjoy turning complex problems into practical software while continuously exploring AI, backend engineering, and automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solver", "Fast Learner", "Team Collaborator"].map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#EDE8DF] text-[#1A1A1A] text-xs font-semibold rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] flex-shrink-0" />
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right — stat blocks + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Stats row */}
            <motion.div
              className="flex items-center gap-2 bg-white border border-[#EDE8DF] shadow-sm px-4 py-2.5 rounded-2xl w-fit mb-5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-base leading-none">🏆</span>
              <div>
                <p className="text-[10px] font-black text-[#F26522] uppercase tracking-wider leading-none mb-0.5">SIH 2025</p>
                <p className="text-[10px] font-semibold text-[#6B6B6B] leading-none">National Finalist</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white rounded-2xl p-5 border border-[#EDE8DF] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl font-black text-[#F26522] mb-1">{s.value}</div>
                  <div className="text-xs text-[#6B6B6B] font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="bg-[#FDE8D8] rounded-2xl p-5 border border-[#F26522]/10 group cursor-default"
                  >
                    <div className="w-10 h-10 bg-[#F26522] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[#6B6B6B] mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-[#F26522]/10 text-[#F26522] text-[10px] font-bold rounded-md border border-[#F26522]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
