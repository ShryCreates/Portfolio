import { motion } from "motion/react";
import { Code, Palette, Server, Database, Wrench, BookOpen } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "from-purple-500 to-purple-600",
      skills: ["JavaScript", "Python", "C++", "Java", "SQL"],
    },
    {
      icon: Palette,
      title: "Frontend",
      color: "from-blue-500 to-blue-600",
      skills: ["HTML", "CSS", "Responsive Design", "React"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-indigo-500 to-indigo-600",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-violet-500 to-violet-600",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "from-fuchsia-500 to-fuchsia-600",
      skills: ["AWS", "GitHub", "Postman", "Linux", "AI Tools"],
    },
    {
      icon: BookOpen,
      title: "Concepts",
      color: "from-pink-500 to-pink-600",
      skills: ["DSA", "OOP", "DBMS", "OS"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 rounded-full text-sm font-medium border border-purple-100 hover:border-purple-300 transition-all duration-300"
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
    </section>
  );
}
