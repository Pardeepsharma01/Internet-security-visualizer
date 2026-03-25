"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "@/components/landing-page/ui/GlassCard";

type Step = {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M21 21l-4.35-4.35M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16z"
          stroke="#00E5FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Enter an IP Address",
    desc: "Input any public IPv4 or IPv6 address to begin deep network reconnaissance.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Analyze Network Exposure",
    desc: "Our engine probes open ports, discovers running services, and identifies potential vulnerabilities.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="#10B981"
          strokeWidth="1.5"
        />
        <path
          d="M8 12l3 3 5-5"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "View Security Insights",
    desc: "Get detailed reports on CVEs, SSL configuration, geolocation, and infrastructure intelligence.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-px hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00E5FF30, #3B82F630, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/5">
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{
                color: "#3B82F6",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Workflow
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            How It{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #3B82F6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Works
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center"
            >
              {/* Step number bg */}
              <div
                className="text-8xl font-black absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  color: "#ffffff05",
                }}
              >
                {step.num}
              </div>

              <GlassCard className="p-8 relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center border border-white/10"
                  style={{
                    background:
                      "linear-gradient(135deg, #00E5FF10, #3B82F610)",
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="text-xs font-mono text-cyan-400 mb-2 tracking-widest"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  STEP {step.num}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}