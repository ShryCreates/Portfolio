import { motion } from "motion/react";
import { Code, Palette, Server, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    accent: "#F26522",
    skills: ["JavaScript", "Python", "C++", "Java", "SQL"],
  },
  {
    icon: Palette,
    title: "Frontend",
    accent: "#1A1A1A",
    skills: ["HTML", "CSS", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    accent: "#F26522",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    icon: Database,
    title: "Databases",
    accent: "#1A1A1A",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    accent: "#F26522",
    skills: ["PyTorch", "Ollama", "LLMs", "Gemini AI", "AI Agents", "Prompt Engineering"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    accent: "#1A1A1A",
    skills: ["Git", "GitHub", "Postman", "n8n", "AWS", "Google Cloud", "Linux", "Docker"],
  },
];

// Marquee items — all unique skills flattened
const allSkills = skillCategories.flatMap((c) => c.skills);
const marqueeItems = [...allSkills, ...allSkills];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F2EDE4] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-12 bg-[#F26522]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">My Toolkit</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Skills &amp;
            <br />
            <span className="text-[#F26522]">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed lg:text-right"
          >
            Technologies, tools and engineering concepts I use to build scalable software and intelligent systems.
          </motion.p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isOrange = category.accent === "#F26522";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  isOrange
                    ? "bg-[#1A1A1A] border-[#1A1A1A]"
                    : "bg-white border-[#EDE8DF]"
                }`}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: isOrange ? "#F26522" : "#FDE8D8" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: isOrange ? "#fff" : "#F26522" }}
                    />
                  </div>
                  <h3
                    className="font-bold text-base"
                    style={{ color: isOrange ? "#FAF7F2" : "#1A1A1A" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + si * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.08 }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full cursor-default transition-all duration-200 ${
                        isOrange
                          ? "bg-white/10 text-[#FAF7F2] hover:bg-[#F26522] hover:text-white"
                          : "bg-[#FDE8D8] text-[#F26522] hover:bg-[#F26522] hover:text-white"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Core Concepts strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 mb-2"
      >
        {/* Label row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-[#F26522]" />
          <span className="text-[10px] font-black tracking-[0.22em] text-[#F26522] uppercase">Core Concepts</span>
          <span className="flex-1 h-px bg-[#DDD7CC]" />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks", "Software Development Life Cycle", "Agile Methodology"].map((concept) => (
            <span
              key={concept}
              className="px-4 py-1.5 text-xs font-semibold text-[#6B6B6B] bg-[#FAF7F2] border border-[#DDD7CC] rounded-full hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-200"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Marquee strip */}
      <div className="mt-20 overflow-hidden">
        <div className="border-y border-[#DDD7CC] bg-[#EDE8DF] py-4">
          <div className="flex gap-0 animate-marquee whitespace-nowrap">
            {marqueeItems.map((skill, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-semibold text-[#6B6B6B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] inline-block" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
