import { motion } from "motion/react";
import { MapPin, ArrowUpRight } from "lucide-react";

interface Credential {
  label: string;
  url: string;
}

interface ExperienceEntry {
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  credentials?: Credential[];
}

const experiences: ExperienceEntry[] = [
  {
    number: "01",
    role: "Software Engineering Intern",
    company: "NTRO (Government of India Organization)",
    period: "Sep 2026 to current",
    location: "Onsite",
    highlights: [
      "Developed scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented RESTful APIs, JWT authentication, CRUD operations, and database integration for reliable application functionality.",
      "Contributed across the SDLC, including development, testing, debugging, documentation, and deployment using Agile practices.",
      "Used Git, GitHub, Postman, Docker, Vercel, and Render for version control, API testing, containerization, and application deployment.",
    ],
    credentials: [
      // Ongoing — offer letter only. Replace "#" with the actual PDF path/URL when ready.
      { label: "Offer Letter", url: "#" },
    ],
  },
  {
    number: "02",
    role: "Full Stack Development Intern",
    company: "Coding Arena",
    period: "Jul 2026 to Sep 2026",
    location: "Remote",
    highlights: [
      "Developed Blog Posting Engine, a Reddit-inspired university community platform with campus-specific feeds and verified users.",
      "Built features including posts, comments, upvotes/downvotes, fact-checking, profiles, search, and emergency alerts.",
      "Implemented AI-powered text and image moderation using Groq and Sightengine to screen content before publication.",
      "Worked with Next.js, React, TypeScript, Node.js, Express.js, PostgreSQL/Supabase, and Tailwind CSS across the full-stack application.",
    ],
    credentials: [
      // Completed — both documents. Replace "#" with actual PDF paths/URLs when ready.
      { label: "Offer Letter",           url: "https://drive.google.com/file/d/1wO-ZdX_4wC0A1d0e_WKuByW_7_DmCLVi/view?usp=sharing" },
      { label: "Completion Certificate", url: "https://drive.google.com/file/d/1p-hP8AQ71g8rOgwWtoMHrog8_yLVjCwV/view?usp=sharing" },
    ],
  },
  {
    number: "03",
    role: "Web Development & Graphic Design Intern",
    company: "Coding Arena",
    period: "Mar 2026 to Jun 2026",
    location: "Remote",
    highlights: [
      "Developed an Event Management System for streamlined event organization and management.",
      "Built an AI-powered Meeting Cost Calculator to estimate meeting expenses efficiently.",
      "Developed responsive web interfaces and contributed to frontend functionality.",
      "Created graphic and visual assets to enhance digital experiences and project presentation.",
    ],
    credentials: [
      // Completed — both documents. Replace "#" with actual PDF paths/URLs when ready.
      { label: "Offer Letter",           url: "https://drive.google.com/file/d/13XilCdaLwGDSiXiDA2TK_P6V-e0DaAiN/view?usp=sharing" },
      { label: "Completion Certificate", url: "https://drive.google.com/file/d/1u7sA0UNqG3Bw6i5gJvN4V5EjgVjNvb4H/view?usp=sharing" },
    ],
  },
];

const Star = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" />
  </svg>
);

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FAF7F2] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06]"
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
          <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">Experience</span>
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
            Work
            <br />
            <span className="text-[#F26522]">History</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed lg:text-right"
          >
            Professional experience and contributions in software engineering.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#EDE8DF] hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative sm:pl-20 mb-10 last:mb-0"
            >
              {/* Orange circle marker */}
              <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 bg-[#F26522] rounded-full items-center justify-center z-10 shadow-md">
                <span className="text-white text-xs font-black">{exp.number}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#EDE8DF] shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <Star size={14} className="absolute top-5 right-8 text-[#F26522] opacity-40" />

                {/* Role + meta */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    {/* Mobile number badge */}
                    <span className="inline-flex sm:hidden mb-2 w-10 h-10 bg-[#F26522] rounded-full text-white text-xs font-black items-center justify-center">
                      {exp.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-1">{exp.role}</h3>
                    <p className="text-[#F26522] font-bold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDE8D8] text-[#F26522] text-xs font-bold rounded-full">
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B]">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#F2EDE4] mb-6" />

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + hIndex * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F26522] flex-shrink-0" />
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Credentials */}
                {exp.credentials && exp.credentials.length > 0 && (
                  <>
                    <div className="h-px bg-[#F2EDE4] mt-6 mb-4" />
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-black tracking-[0.18em] text-[#9A9A9A] uppercase">
                        Credentials
                      </span>
                      {exp.credentials.map((cred) => (
                        <a
                          key={cred.label}
                          href={cred.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#EDE8DF] text-[#1A1A1A] text-xs font-semibold rounded-full hover:border-[#F26522] hover:text-[#F26522] hover:bg-[#FDE8D8] transition-all duration-200"
                        >
                          <ArrowUpRight className="w-3 h-3" />
                          {cred.label}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* "More coming" note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex sm:pl-20 items-center gap-4"
        >
          <div className="hidden sm:flex w-12 h-12 border-2 border-dashed border-[#DDD7CC] rounded-full items-center justify-center">
            <span className="text-[#DDD7CC] text-lg font-bold">+</span>
          </div>
          <p className="text-sm text-[#9A9A9A] italic">More chapters ahead.</p>
        </motion.div>
      </div>
    </section>
  );
}
