"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/landing-page/ui/GlitchText";
import GlassCard from "@/components/landing-page/ui/GlassCard";
import TerminalLine from "@/components/landing-page/ui/TerminalLine";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #00E5FF15 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/4 w-100 h-100 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #3B82F620 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <span
            className="text-xs tracking-widest font-semibold uppercase"
            style={{
              color: "#00E5FF",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Network Intelligence Active
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          <GlitchText text="Internet Security" className="text-white" />

          <br />

          <span
            style={{
              background:
                "linear-gradient(90deg, #00E5FF, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Visualizer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Analyze internet-exposed services, open ports, vulnerabilities,
          and infrastructure using real network intelligence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        <Link href="/dashboard" >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px #00E5FF50",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-black transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, #00E5FF, #3B82F6)",
              fontFamily: "'Orbitron', monospace",
              letterSpacing: "0.06em",
            }}
          >
            <svg
              className="w-4 h-4"
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

            Launch Dashboard
          </motion.button>
            </Link>
            <Link href="/ip-analyzer" >
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#00E5FF",
              color: "#00E5FF",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-gray-300 border border-white/20 backdrop-blur-md transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
            style={{
              fontFamily: "'Orbitron', monospace",
              letterSpacing: "0.06em",
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth={2} />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-4.35-4.35"
              />
            </svg>

            Analyze an IP
          </motion.button>
            </Link>
        </motion.div>
        

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { val: "2.1", suffix: "M+", label: "IPs Scanned" },
            { val: "847", suffix: "K", label: "Ports Analyzed" },
            { val: "99", suffix: ".9%", label: "Uptime" },
          ].map(({ val, suffix, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Orbitron', monospace",
                  color: "#00E5FF",
                }}
              >
                {val}
                {suffix}
              </div>

              <div
                className="text-xs text-gray-500 mt-1 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 mx-auto max-w-xl"
        >
          <GlassCard className="p-4 text-left" hover={false}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />

              <span
                className="ml-3 text-xs text-gray-500"
                style={{
                  fontFamily:
                    "'JetBrains Mono', monospace",
                }}
              >
                isv-terminal ~ scan
              </span>
            </div>

            <TerminalLine
              text="$ isv scan --target 192.168.1.1 --deep"
              delay={1000}
            />

            <TerminalLine
              text="[INFO] Initiating network intelligence scan..."
              delay={1600}
              color="#3B82F6"
            />

            <TerminalLine
              text="[SCAN] Probing 65,535 ports... done in 2.3s"
              delay={2200}
              color="#F59E0B"
            />

            <TerminalLine
              text="[OPEN] 22/SSH  80/HTTP  443/HTTPS  8080/HTTP"
              delay={2800}
              color="#10B981"
            />

            <TerminalLine
              text="[VULN] CVE-2024-0001 detected — Severity: HIGH"
              delay={3400}
              color="#EF4444"
            />

            <TerminalLine
              text="[DONE] Scan complete. 3 vulnerabilities found."
              delay={4000}
              color="#00E5FF"
            />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}