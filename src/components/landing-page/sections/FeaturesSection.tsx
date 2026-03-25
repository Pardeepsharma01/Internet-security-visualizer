"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "../ui/GlassCard";

type Feature = {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  tags: string[];
};

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" stroke="#00E5FF" strokeWidth="1.5" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          stroke="#00E5FF"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path
          d="M2 12h4M18 12h4M12 2v4M12 18v4"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
      </svg>
    ),
    color: "#00E5FF",
    title: "IP Intelligence",
    description:
      "Analyze any IP address and discover infrastructure details, ASN data, hosting provider, and geographic location with precision.",
    tags: ["ASN Lookup", "Geo-IP", "WHOIS"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect
          x="2"
          y="6"
          width="20"
          height="12"
          rx="2"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M6 12h2M10 10v4M14 9v6M18 11v2"
          stroke="#00E5FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#3B82F6",
    title: "Open Ports Detection",
    description:
      "Identify exposed services and attack surfaces across all 65,535 ports with real-time service fingerprinting and banner grabbing.",
    tags: ["Port Scan", "Service ID", "Banner Grab"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
          stroke="#EF4444"
          strokeWidth="1.5"
        />
        <path
          d="M12 8v4M12 16h.01"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#EF4444",
    title: "Security Insights",
    description:
      "View CVE vulnerabilities, SSL certificate information, TLS configuration issues, and full network intelligence reports.",
    tags: ["CVE Database", "SSL Audit", "Risk Score"],
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{
                color: "#00E5FF",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Features
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Full Spectrum{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #00E5FF, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Analysis
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Comprehensive network intelligence tools powered by
            Shodan's global scanning infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlassCard className="p-8 h-full group">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 transition-all duration-300 group-hover:border-cyan-400/40"
                  style={{ background: `${feat.color}15` }}
                >
                  {feat.icon}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  {feat.title}
                </h3>

                <p
                  className="text-gray-400 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}