"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    text: "Visual dashboard instead of raw Shodan data",
    icon: "📊",
    color: "#00f0ff",
  },
  {
    text: "Beginner-friendly interface",
    icon: "🎯",
    color: "#39ff14",
  },
  {
    text: "Instant insights without complex queries",
    icon: "⚡",
    color: "#facc15",
  },
  {
    text: "No signup required",
    icon: "🚀",
    color: "#b026ff",
  },
];

export default function WhyISV() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
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
              Advantages
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00f0ff, #facc15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ISV?
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need to understand internet security — at a glance.
          </p>
        </motion.div>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="group flex items-start gap-5 rounded-xl backdrop-blur-md border border-white/10 bg-white/5 p-6 transition-all duration-300 cursor-default hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center text-xl border border-white/10 transition-all duration-300 group-hover:border-opacity-40"
                style={{
                  background: `${point.color}12`,
                  borderColor: `${point.color}20`,
                }}
              >
                {point.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p
                  className="text-white font-medium leading-snug group-hover:text-cyan-200 transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span
                    className="font-bold mr-2"
                    style={{ color: point.color, fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ✦
                  </span>
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}