import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ── EmailJS config (loaded from .env.local — never committed to git) ──
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

type Status = "idle" | "sending" | "success" | "error";

const socialLinks = [
  { icon: Mail,         label: "shry1012005@gmail.com",             href: "mailto:shry1012005@gmail.com",                         sublabel: "Email" },
  { icon: Linkedin,     label: "linkedin.com/in/shreya-kumari",      href: "https://www.linkedin.com/in/shreya-kumari-24a249333/",  sublabel: "LinkedIn" },
  { icon: Github,       label: "github.com/ShryCreates",             href: "https://github.com/ShryCreates",                       sublabel: "GitHub" },
  { icon: LeetCodeIcon, label: "leetcode.com/u/Shry_Kri",            href: "https://leetcode.com/u/Shry_Kri/",                     sublabel: "LeetCode" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message, title: "Portfolio Contact" },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] relative overflow-hidden">

      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F26522 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F26522 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#F26522]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#F26522] uppercase">Get In Touch</span>
          </div>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            LET'S BUILD
            <br />
            <span className="text-[#F26522]">SOMETHING</span>
            <br />
            GREAT.
          </h2>
          <p className="mt-6 text-[#9A9A9A] max-w-lg text-base leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Currently available for internships, freelance projects, and full-time roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#9A9A9A] mb-2 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Shreya Kumari"
                  required
                  className="w-full px-5 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl outline-none placeholder:text-white/25 focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#9A9A9A] mb-2 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                  className="w-full px-5 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl outline-none placeholder:text-white/25 focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#9A9A9A] mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  required
                  className="w-full px-5 py-3.5 bg-white/5 text-white border border-white/10 rounded-xl outline-none placeholder:text-white/25 focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-sm text-emerald-400 font-medium">
                  Message sent! I'll get back to you soon. ✓
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-[#F26522] text-white font-bold rounded-full hover:bg-[#d95510] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-orange-900/30"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending…" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Find Me Online</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#F26522]/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-[#F26522]/10 group-hover:bg-[#F26522] rounded-lg flex items-center justify-center text-[#F26522] group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#9A9A9A] uppercase tracking-wider mb-0.5">{link.sublabel}</p>
                        <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{link.label}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-[#F26522]/10 border border-[#F26522]/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider">Available Now</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Open to internships, freelance projects, and full-time opportunities in software engineering and AI development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
