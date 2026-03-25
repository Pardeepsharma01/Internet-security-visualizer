"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const users = [
  {
    icon: "🔬",
    title: "Security Researchers",
    desc: "Analyze exposed infrastructure and vulnerabilities.",
    color: "#00f0ff",
    tag: "Research",
  },
  {
    icon: "💻",
    title: "Developers",
    desc: "Check server exposure before deployment.",
    color: "#3b82f6",
    tag: "Dev",
  },
  {
    icon: "🛡️",
    title: "Network Engineers",
    desc: "Monitor and audit network services.",
    color: "#39ff14",
    tag: "Ops",
  },
  {
    icon: "🎓",
    title: "Cybersecurity Students",
    desc: "Learn real-world internet security insights.",
    color: "#b026ff",
    tag: "Learning",
  },
];

export default function WhoIsThisFor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "#00f0ff", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Audience
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Who Is{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00f0ff, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              This For?
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built for professionals and learners in cybersecurity and networking.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, i) => (
            <motion.div
              key={user.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.04 }}
              className="group relative rounded-xl backdrop-blur-md border border-white/10 bg-white/5 p-7 transition-all duration-300 cursor-pointer hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${user.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5 border border-white/10 transition-all duration-300 group-hover:border-opacity-40"
                style={{
                  background: `${user.color}15`,
                  borderColor: `${user.color}20`,
                }}
              >
                {user.icon}
              </div>

              {/* Tag */}
              <div className="mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded-full border font-mono"
                  style={{
                    color: user.color,
                    borderColor: `${user.color}40`,
                    background: `${user.color}10`,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {user.tag}
                </span>
              </div>

              <h3
                className="font-bold text-white mb-2 text-base group-hover:text-cyan-300 transition-colors duration-300"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                {user.title}
              </h3>

              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {user.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}