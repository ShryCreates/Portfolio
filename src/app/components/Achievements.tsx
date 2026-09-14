import { motion } from "motion/react";
import { Trophy, Award, BookOpen, Star, Users, FileText } from "lucide-react";

const achievements = [
  {
    number: "01",
    icon: Trophy,
    title: "Smart India Hackathon 2025",
    description: "Selected as a National Finalist for an AI/ML-based firmware analysis and cybersecurity solution.",
    accent: true,
  },
  {
    number: "02",
    icon: Award,
    title: "SolveExpo 2026",
    description: "Awarded 3rd Runner-Up for presenting an innovative technology project.",
    accent: false,
  },
  {
    number: "03",
    icon: Users,
    title: "Microsoft Learn Student Ambassador — April 2025",
    description: "Selected as a Microsoft Learn Student Ambassador and engaged learners through technology initiatives.",
    accent: true,
  },
  {
    number: "04",
    icon: FileText,
    title: "Research Publication — IJARESM",
    description: "Published a research paper titled “Inference and Precision” in IJARESM.",
    accent: false,
  },
  {
    number: "05",
    icon: Star,
    title: "NPTEL / IIT Kanpur — Jan–Apr 2026",
    description: "Successfully completed the NPTEL Machine Learning course with a 61% score.",
    accent: true,
  },
  {
    number: "06",
    icon: BookOpen,
    title: "NPTEL / IIT Kharagpur — Jan–Apr 2025",
    description: "Successfully completed Programming in Java with a 79% score.",
    accent: false,
  },
];

const StarDeco = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" />
  </svg>
);

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#FAF7F2] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #F26522 0%, transparent 70%)" }} />

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
          <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">Recognition</span>
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
            Achievements &amp;
            <br />
            <span className="text-[#F26522]">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed lg:text-right"
          >
            Milestones, honours, and certifications earned along the journey.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden ${
                  item.accent
                    ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                    : "bg-white border-[#EDE8DF] text-[#1A1A1A]"
                }`}
              >
                {/* Decorative number */}
                <span
                  className={`absolute top-4 right-5 text-5xl font-black leading-none select-none ${
                    item.accent ? "text-white/10" : "text-[#1A1A1A]/5"
                  }`}
                >
                  {item.number}
                </span>

                <StarDeco
                  size={10}
                  className={`absolute bottom-4 right-6 ${item.accent ? "text-[#F26522] opacity-50" : "text-[#F26522] opacity-30"}`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.accent ? "bg-[#F26522]" : "bg-[#FDE8D8]"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${item.accent ? "text-white" : "text-[#F26522]"}`} />
                </div>

                <h3 className={`font-black text-base leading-snug mb-2 ${item.accent ? "text-white" : "text-[#1A1A1A]"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${item.accent ? "text-white/70" : "text-[#6B6B6B]"}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
