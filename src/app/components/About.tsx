import { motion } from "motion/react";
import { GraduationCap, Code, Brain, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN stack expertise with modern web technologies",
    },
    {
      icon: Brain,
      title: "AI-Based Solutions",
      description: "Machine learning and intelligent system design",
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Strong DSA and algorithmic thinking",
    },
    {
      icon: GraduationCap,
      title: "Scalable Systems",
      description: "Experience with DBMS and system architecture",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate Software Engineer with a strong foundation in full stack development
                and a keen interest in artificial intelligence. I specialize in building scalable
                web applications using the MERN stack and developing intelligent AI-driven solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With expertise in data structures, algorithms, and system design, I approach
                every problem with analytical thinking and creative solutions. My experience
                spans from developing responsive web interfaces to implementing complex backend
                systems and AI models.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">B.Tech in Computer Science & IT</span>
                </p>
                <p className="text-gray-600">2023 – 2027</p>
                <p className="text-purple-600 font-semibold mt-1">CPI: 8.36</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
