import { Heart, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-3">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-lg font-semibold text-white"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span>Shreya Kumari</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 text-purple-200 text-sm"
          >
            Crafted with <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" /> and lots of{" "}
            <Code2 className="w-4 h-4 text-cyan-300" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-purple-400 text-xs tracking-widest uppercase"
          >
            turning ideas into reality
          </motion.p>

        </div>
      </div>
    </footer>
  );
}
