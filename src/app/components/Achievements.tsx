import { motion } from "motion/react";
import { Trophy, Award, BookOpen, Star, Users, FileText } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "SIH 2025 Finalist",
      description: "Smart India Hackathon National Finalist",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Microsoft Learn Student Ambassador",
      description: "Official Microsoft Student Ambassador",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "SolveExpo 2026",
      description: "3rd Runner-Up in National Tech Competition",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Research Publication",
      description: "Published in International Journal",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      title: "Google Cloud Arcade",
      description: "Multiple achievement badges earned",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: BookOpen,
      title: "NPTEL Java Certification",
      description: "Scored 79% in NPTEL Java Course",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className={`bg-gradient-to-br ${achievement.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
