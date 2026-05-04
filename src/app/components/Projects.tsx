import { motion } from "motion/react";
import { Github, ExternalLink, Server, Brain, ShieldAlert, Music, Gamepad2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "HealthLock- A Hospital Management System",
      description: "A comprehensive full-stack application for managing hospital operations, patient records, and appointments. Features responsive UI and robust backend with REST APIs.",
      icon: Server,
      color: "from-purple-600 to-pink-500",
      tags: ["MERN Stack", "REST APIs", "Responsive Design"],
      highlights: [
        "Manages 100+ patient records efficiently",
        "RESTful API architecture",
        "Responsive and intuitive user interface",
        "Real-time data synchronization",
      ],
      github: "https://github.com/ShryCreates/Health_Lock-A_Hospital_Management_System",
      demo: "#",
    },
    {
      title: "AI/ML Based Crypto Primitive Identification In Firmware",
      description: "Machine learning-based detection system for identifying cryptographic primitives in code. Utilizes advanced ML algorithms for pattern recognition and classification.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      tags: ["Machine Learning", "Python", "AI"],
      highlights: [
        "Improved detection accuracy by 40%",
        "Advanced pattern recognition algorithms",
        "Automated cryptographic analysis",
        "Scalable ML pipeline",
      ],
      github: "https://github.com/ShryCreates/AI-ML_Crypto_Primitive_Identification_in_Firmware",
      demo: "#",
    },
    {
      title: "Malware Detection System",
      description: "A full-stack malware detection system built with the MERN stack that analyzes file behavior and signatures to identify and classify malicious software in real time.",
      icon: ShieldAlert,
      color: "from-rose-500 to-orange-400",
      tags: ["MERN Stack", "REST APIs", "Cybersecurity"],
      highlights: [
        "Real-time malware classification",
        "Behavioral and signature-based analysis",
        "RESTful API architecture",
        "Responsive and intuitive dashboard",
      ],
      github: "https://github.com/ShryCreates/Malware_Detection_Web_App_Project",
      demo: "#",
    },
    {
      title: "Spotify Clone",
      description: "A pixel-perfect Spotify UI clone built purely with HTML and CSS, replicating the look and feel of the Spotify web player with no JavaScript or frameworks.",
      icon: Music,
      color: "from-emerald-400 to-teal-600",
      tags: ["HTML", "CSS"],
      highlights: [
        "Pixel-perfect Spotify UI recreation",
        "Fully responsive layout",
        "Pure HTML & CSS — no JavaScript",
        "Custom styled components and animations",
      ],
      github: "https://github.com/ShryCreates/Spotify_Clone_Project",
      demo: "#",
    },
    {
      title: "Simon Says Game",
      description: "An interactive Simon Says memory game built with HTML, CSS, and JavaScript, using DOM manipulation to handle game logic, sequences, and user interactions.",
      icon: Gamepad2,
      color: "from-amber-400 to-yellow-500",
      tags: ["HTML", "CSS", "JavaScript", "DOM"],
      highlights: [
        "Dynamic sequence generation with DOM manipulation",
        "Progressive difficulty as levels increase",
        "Visual and interactive feedback on user input",
        "Fully browser-based with no dependencies",
      ],
      github: "https://github.com/ShryCreates/Simon_Says_Game",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  <div className={`bg-gradient-to-br ${project.color} p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-white/90">{project.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
