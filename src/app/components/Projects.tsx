import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    number: "01",
    title: "AI/ML Crypto Primitive Identification in Firmware",
    description:
      "An AI/ML-powered framework for identifying cryptographic primitives and protocols in firmware binaries across heterogeneous architectures.",
    tags: ["AI/ML", "Python", "PyTorch", "Cybersecurity"],
    highlights: [
      "Automated cryptographic analysis",
      "ML-based pattern classification",
      "Firmware binary analysis",
      "Scalable detection pipeline",
    ],
    github: "https://github.com/ShryCreates/AI-ML_Crypto_Primitive_Identification_in_Firmware",
    demo: "#",
    featured: true,
  },
  {
    number: "02",
    title: "HealthLock — Hospital Management System",
    description:
      "A full-stack hospital management system for managing patient records, appointments, and hospital operations through a responsive interface and RESTful backend.",
    tags: ["MERN Stack", "REST APIs", "MongoDB"],
    highlights: [
      "Patient record management",
      "Appointment scheduling",
      "RESTful API architecture",
      "Responsive user interface",
    ],
    github: "https://github.com/ShryCreates/Health_Lock-A_Hospital_Management_System",
    demo: "#",
    featured: true,
  },
  {
    number: "03",
    title: "CertiProof",
    description:
      "AI-based certificate authenticity validator designed to detect fake and manipulated academic certificates using OCR, image processing, and machine learning.",
    tags: ["Python", "TensorFlow", "PaddleOCR", "OpenCV"],
    highlights: [
      "AI-based academic certificate verification",
      "OCR-based text extraction",
      "Image manipulation detection",
      "Automated authenticity analysis",
    ],
    github: "https://github.com/ShryCreates/CertiProof",
    demo: "#",
  },
  {
    number: "04",
    title: "Project Management Tool",
    description:
      "A modern full-stack project management platform for creating projects, managing tasks, and organizing workflows with secure authentication and a responsive dashboard.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    highlights: [
      "Project and task management",
      "Team collaboration and workflow tracking",
      "User authentication and role-based access",
      "Responsive and intuitive dashboard",
    ],
    github: "https://github.com/ShryCreates/Project-Management-Tool",
    demo: "#",
  },
  {
    number: "05",
    title: "Social Media Platform",
    description:
      "A modern full-stack social media platform where users can connect, share text and image posts, follow other users, and interact through likes and comments.",
    tags: ["JavaScript", "Node.js", "MongoDB", "Express.js"],
    highlights: [
      "JWT-based authentication with protected routes",
      "User profiles with follow/unfollow functionality",
      "Create, edit, delete, and share image/text posts",
      "Likes, comments, and user search functionality",
    ],
    github: "https://github.com/ShryCreates/Project-Management-Tool",
    demo: "#",
  },
];

// Featured card (large, alternating layout)
function FeaturedCard({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className={`flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border border-[#EDE8DF] shadow-sm hover:shadow-lg transition-all duration-400 ${
        flip ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Colour panel */}
      <div className="lg:w-2/5 bg-[#1A1A1A] p-8 lg:p-10 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#F26522 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10">
          <span className="text-[#F26522] text-7xl font-black opacity-30 leading-none select-none block mb-4">
            {project.number}
          </span>
          <h3 className="text-2xl font-black text-white leading-snug">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 relative z-10 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:w-3/5 bg-white p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">{project.description}</p>
          <ul className="space-y-2 mb-8">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B6B6B]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F26522] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-full hover:bg-[#F26522] transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {project.demo !== "#" && (
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FDE8D8] text-[#F26522] text-sm font-semibold rounded-full hover:bg-[#F26522] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Compact card (small grid)
function CompactCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-6 border border-[#EDE8DF] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl font-black text-[#F26522] opacity-25 leading-none">{project.number}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#F2EDE4] rounded-full flex items-center justify-center text-[#6B6B6B] hover:bg-[#F26522] hover:text-white transition-all duration-300"
          aria-label={`GitHub: ${project.title}`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <h3 className="font-black text-base text-[#1A1A1A] leading-snug mb-2">{project.title}</h3>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-[#FDE8D8] text-[#F26522] text-xs font-semibold rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#F2EDE4] relative overflow-hidden">

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
          <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">Selected Work</span>
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
            Featured
            <br />
            <span className="text-[#F26522]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed lg:text-right"
          >
            A selection of projects showcasing my expertise in full-stack development, AI/ML, and cybersecurity.
          </motion.p>
        </div>

        {/* Featured projects — large alternating cards */}
        <div className="space-y-6 mb-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.number} project={project} flip={i % 2 !== 0} />
          ))}
        </div>

        {/* Remaining projects — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <CompactCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/ShryCreates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] text-white text-sm font-bold rounded-full hover:bg-[#F26522] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
