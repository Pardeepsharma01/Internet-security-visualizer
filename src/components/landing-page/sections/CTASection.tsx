"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "@/components/landing-page/ui/GlassCard";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <GlassCard
            className="p-12 sm:p-16 relative overflow-hidden"
            hover={false}
          >
            {/* BG glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, #00E5FF 0%, transparent 60%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{
                    color: "#00E5FF",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Free to Use
                </span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-black text-white mb-6"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Start Analyzing Internet{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #00E5FF, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Infrastructure
                </span>
              </h2>

              <p
                className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Gain full visibility into exposed services, open ports,
                and vulnerabilities in seconds. No sign-up required.
              </p>
                  <Link href="/dashboard">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 40px #00E5FF60",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-base font-bold text-black transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #00E5FF, #3B82F6)",
                  fontFamily: "'Orbitron', monospace",
                  letterSpacing: "0.06em",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>

                Launch Security Dashboard
              </motion.button>
                    </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}