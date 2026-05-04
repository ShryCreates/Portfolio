import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-purple-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shreya Kumari
              </h1>
            </motion.div>

            <motion.h2
              className="text-lg sm:text-xl lg:text-3xl text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Aspiring Software Engineer | Full Stack Developer | AI Enthusiast
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Building scalable web apps and intelligent AI-driven solutions
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/80 text-purple-600 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { href: "https://github.com/ShryCreates", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/shreya-kumari-24a249333/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:shry1012005@gmail.com", icon: Mail, label: "Email" },
                { href: "https://leetcode.com/u/Shry_Kri/", icon: Code2, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 rounded-full hover:bg-purple-100 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-gray-700" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar/Illustration */}
          <motion.div
            className="flex-1 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-full aspect-square bg-gradient-to-br from-purple-400 via-blue-400 to-purple-300 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <div className="text-6xl sm:text-8xl">👩‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
