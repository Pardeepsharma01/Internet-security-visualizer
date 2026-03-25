"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    number: "01",
    title: "Check Server Exposure",
    desc: "Find open ports and risks in your own infrastructure.",
    icon: "🔍",
    color: "#00f0ff",
  },
  {
    number: "02",
    title: "Pre-Deployment Audit",
    desc: "Ensure your system is secure before going live.",
    icon: "✅",
    color: "#39ff14",
  },
  {
    number: "03",
    title: "Learn Attack Surface",
    desc: "Understand how attackers view internet systems.",
    icon: "⚔️",
    color: "#ff2a2a",
  },
  {
    number: "04",
    title: "Org Infrastructure Analysis",
    desc: "Analyze public-facing services of organizations.",
    icon: "🏢",
    color: "#b026ff",
  },
];

export default function UseCases() {
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
              Use Cases
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Practical{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00f0ff, #39ff14)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Applications
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Practical ways to use Internet Security Visualizer.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.04 }}
              className="group relative rounded-xl backdrop-blur-md border border-white/10 bg-white/5 p-7 transition-all duration-300 cursor-pointer hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-5 text-5xl font-black opacity-5 select-none"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  color: item.color,
                  opacity: 0.08,
                }}
              >
                {item.number}
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-5 border transition-all duration-300"
                style={{
                  background: `${item.color}10`,
                  borderColor: `${item.color}25`,
                }}
              >
                {item.icon}
              </div>

              {/* Number badge */}
              <div className="mb-3">
                <span
                  className="text-xs font-mono tracking-widest"
                  style={{
                    color: item.color,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  /{item.number}
                </span>
              </div>

              <h3
                className="font-bold text-white mb-2 text-base group-hover:text-cyan-300 transition-colors duration-300"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}