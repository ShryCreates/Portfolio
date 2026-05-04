import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Coding Arena",
      period: "2026",
      location: "Remote",
      highlights: [
        "Built scalable web applications handling high traffic loads",
        "Reduced application load time by 20% through optimization",
        "Developed and integrated REST APIs for seamless data flow",
        "Collaborated in agile teams for rapid feature development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6 flex-wrap sm:flex-nowrap">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                    <p className="text-lg sm:text-xl text-purple-600 font-semibold mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + hIndex * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
