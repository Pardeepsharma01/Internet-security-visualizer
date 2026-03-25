"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    emoji: "🌐",
    title: "Internet Access",
    desc: "Enables websites and services to send data back to your device.",
    color: "#00f0ff",
    bg: "rgba(0,240,255,0.05)",
    border: "rgba(0,240,255,0.2)",
    hoverBorder: "rgba(0,240,255,0.5)",
    hoverShadow: "0 0 24px rgba(0,240,255,0.15)",
  },
  {
    emoji: "📍",
    title: "Location Awareness",
    desc: "Your IP can reveal approximate location like city or country.",
    color: "#b026ff",
    bg: "rgba(176,38,255,0.05)",
    border: "rgba(176,38,255,0.2)",
    hoverBorder: "rgba(176,38,255,0.5)",
    hoverShadow: "0 0 24px rgba(176,38,255,0.15)",
  },
  {
    emoji: "🔐",
    title: "Security Impact",
    desc: "Exposed ports and services on your IP can create security risks.",
    color: "#ff2a2a",
    bg: "rgba(255,42,42,0.05)",
    border: "rgba(255,42,42,0.2)",
    hoverBorder: "rgba(255,42,42,0.5)",
    hoverShadow: "0 0 24px rgba(255,42,42,0.15)",
  },
];

export default function PublicIPInfo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Label badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "#00f0ff", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Fundamentals
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            What is a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00f0ff, #b026ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Public IP?
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A public IP address is a unique identifier assigned to your device when it
            connects to the internet. It allows communication between your device and
            the global network.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-xl border backdrop-blur-md p-8 transition-all duration-300 cursor-pointer"
              style={{
                background: card.bg,
                borderColor: card.border,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.hoverBorder;
                (e.currentTarget as HTMLDivElement).style.boxShadow = card.hoverShadow;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.border;
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Icon container */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/10"
                style={{ background: card.bg }}
              >
                {card.emoji}
              </div>

              <h3
                className="text-lg font-bold text-white mb-3 transition-colors duration-300"
                style={{ fontFamily: "'Orbitron', monospace", color: card.color }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm text-gray-400 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p
            className="text-sm text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
             While public IPs are essential for connectivity, tools like VPNs or
            proxies can help protect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}