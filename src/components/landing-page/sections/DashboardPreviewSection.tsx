"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "@/components/landing-page/ui/GlassCard";

type PortStatus = "open" | "warn" | "danger";

function MiniPortBar({
  port,
  service,
  status,
}: {
  port: string;
  service: string;
  status: PortStatus;
}) {
  const color =
    status === "open"
      ? "#10B981"
      : status === "warn"
      ? "#F59E0B"
      : "#EF4444";

  return (
    <div className="flex items-center gap-3 py-2 border-b border-white/5">
      <span
        className="w-2 h-2 rounded-full shrink-0 animate-pulse"
        style={{ background: color }}
      />
      <span
        className="text-xs font-mono text-gray-300 w-12"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {port}
      </span>
      <span className="text-xs text-gray-500 flex-1">{service}</span>
      <span
        className="text-xs px-2 py-0.5 rounded-full"
        style={{
          color,
          background: `${color}20`,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {status}
      </span>
    </div>
  );
}

export default function DashboardPreviewSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="dashboard-preview"
      ref={ref}
      className="relative py-24 px-4 sm:px-6"
    >
      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-200 h-100 opacity-10 blur-3xl rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, #00E5FF 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{
                color: "#10B981",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Live Preview
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Dashboard{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #10B981, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Preview
            </span>
          </h2>

          <p
            className="text-gray-400 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A live glimpse into the intelligence dashboard — built for
            security analysts and researchers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Server Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-2"
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span
                  className="text-xs tracking-widest uppercase font-semibold text-gray-400"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Server Information
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: "IP Address",
                    val: "192.168.1.247",
                    color: "#00E5FF",
                  },
                  {
                    label: "Hostname",
                    val: "srv-prod-01.example.com",
                    color: "#fff",
                  },
                  {
                    label: "Organization",
                    val: "Cloudflare, Inc.",
                    color: "#fff",
                  },
                  { label: "ASN", val: "AS13335", color: "#3B82F6" },
                  {
                    label: "Country",
                    val: "🇺🇸 United States",
                    color: "#fff",
                  },
                  {
                    label: "Risk Score",
                    val: "⚠ HIGH (74/100)",
                    color: "#EF4444",
                  },
                ].map(({ label, val, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{
                        color,
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Open Ports */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span
                  className="text-xs tracking-widest uppercase font-semibold text-gray-400"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Open Ports
                </span>
              </div>

              <MiniPortBar port="22" service="SSH" status="open" />
              <MiniPortBar port="80" service="HTTP" status="open" />
              <MiniPortBar port="443" service="HTTPS" status="open" />
              <MiniPortBar port="3306" service="MySQL" status="warn" />
              <MiniPortBar port="6379" service="Redis" status="danger" />
            </GlassCard>
          </motion.div>

          {/* Vulnerabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span
                  className="text-xs tracking-widest uppercase font-semibold text-gray-400"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Vulnerabilities
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    cve: "CVE-2024-0001",
                    sev: "CRITICAL",
                    color: "#EF4444",
                  },
                  {
                    cve: "CVE-2023-4863",
                    sev: "HIGH",
                    color: "#F59E0B",
                  },
                  {
                    cve: "CVE-2023-2033",
                    sev: "HIGH",
                    color: "#F59E0B",
                  },
                  {
                    cve: "CVE-2022-3786",
                    sev: "MEDIUM",
                    color: "#3B82F6",
                  },
                ].map(({ cve, sev, color }) => (
                  <div
                    key={cve}
                    className="flex items-center justify-between"
                  >
                    <span
                      className="text-xs font-mono text-gray-400"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {cve}
                    </span>

                    <span
                      className="text-xs px-2 py-0.5 rounded font-bold"
                      style={{
                        color,
                        background: `${color}20`,
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {sev}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* SSL Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sm:col-span-2"
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className="text-xs tracking-widest uppercase font-semibold text-gray-400"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  SSL / TLS Analysis
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Protocol", val: "TLS 1.3", ok: true },
                  { label: "Cert Valid", val: "✓ Valid", ok: true },
                  { label: "Issuer", val: "Let's Encrypt", ok: true },
                  { label: "Expiry", val: "89 days", ok: true },
                  { label: "HSTS", val: "Enabled", ok: true },
                  { label: "Perfect FS", val: "✗ Missing", ok: false },
                ].map(({ label, val, ok }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between p-2 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </span>

                    <span
                      className="text-xs font-mono"
                      style={{
                        color: ok ? "#10B981" : "#EF4444",
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}