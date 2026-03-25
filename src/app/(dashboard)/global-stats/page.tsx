"use client";

import { Globe, Server, AlertTriangle, Activity, Wifi, ShieldAlert } from "lucide-react";
import { StatsCard } from "@/components/ui/StatsCard";
import { motion } from "framer-motion";

// ── Static demo data ─────────────────────────────────────────────────────────

const TOP_PORTS = [
  { port: 80,   service: "HTTP",  hosts: 18.2, unit: "18.2M" },
  { port: 443,  service: "HTTPS", hosts: 15.7, unit: "15.7M" },
  { port: 22,   service: "SSH",   hosts: 4.3,  unit: "4.3M"  },
  { port: 21,   service: "FTP",   hosts: 1.9,  unit: "1.9M"  },
  { port: 3389, service: "RDP",   hosts: 1.2,  unit: "1.2M"  },
];
const MAX_HOSTS = 18.2;

const THREAT_SOURCES = [
  { country: "China",         code: "CN", events: 3.2, label: "3.2M", flag: "🇨🇳" },
  { country: "United States", code: "US", events: 2.8, label: "2.8M", flag: "🇺🇸" },
  { country: "Russia",        code: "RU", events: 2.4, label: "2.4M", flag: "🇷🇺" },
  { country: "Brazil",        code: "BR", events: 1.9, label: "1.9M", flag: "🇧🇷" },
  { country: "India",         code: "IN", events: 1.5, label: "1.5M", flag: "🇮🇳" },
];
const MAX_EVENTS = 3.2;

// ── Port bar colour by rank ───────────────────────────────────────────────────
const PORT_COLORS = [
  { bar: "#00f0ff", glow: "rgba(0,240,255,0.4)", text: "#00f0ff" },
  { bar: "#39ff14", glow: "rgba(57,255,20,0.35)", text: "#39ff14" },
  { bar: "#a855f7", glow: "rgba(168,85,247,0.35)", text: "#a855f7" },
  { bar: "#f59e0b", glow: "rgba(245,158,11,0.35)", text: "#f59e0b" },
  { bar: "#f43f5e", glow: "rgba(244,63,94,0.35)", text: "#f43f5e" },
];

// ── Threat level colour ───────────────────────────────────────────────────────
const THREAT_COLORS = ["#f43f5e", "#fb923c", "#f59e0b", "#facc15", "#a3e635"];

export default function GlobalStatsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="max-w-7xl mx-auto relative z-10">
      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 pb-6 border-b border-[var(--color-cyber-border)] relative"
      >
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-[var(--color-neon-green)] to-transparent"></div>
        <h1 className="text-3xl font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-neon-green)] mb-2 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(57,255,20,0.3)] font-black">
          <span className="w-4 h-4 rounded-sm bg-[var(--color-neon-green)] block shadow-[0_0_15px_var(--color-neon-green)] animate-pulse"></span>
          GLOBAL_TELEMETRY
        </h1>
        <p className="text-[var(--color-cyber-text-dim)] font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
          <span className="text-[var(--color-neon-green)]">❯</span> Aggregated internet-wide scanning statistics
        </p>
      </motion.div>

      {/* ── Stat cards ──────────────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        <StatsCard title="Indexed Nodes"      value="4.2B"   icon={<Globe        className="w-6 h-6" />}                                     trend={{ value: "+2.4%", isUp: true  }} delay={0.1} />
        <StatsCard title="Vulnerable Systems" value="18.4M"  icon={<AlertTriangle className="w-6 h-6 text-[var(--color-neon-red)]" />}        trend={{ value: "-1.2%", isUp: false }} delay={0.2} />
        <StatsCard title="Active Scans/Sec"   value="1,240"  icon={<Activity      className="w-6 h-6 text-[var(--color-neon-green)]" />}                                               delay={0.3} />
        <StatsCard title="Known Services"     value="152K"   icon={<Server        className="w-6 h-6" />}                                     trend={{ value: "+4.1%", isUp: true  }} delay={0.4} />
      </motion.div>

      {/* ── Data panels ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Top Ports ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[rgba(15,15,20,0.4)] backdrop-blur-xl border border-[var(--color-cyber-border)] rounded-xl p-8 min-h-[400px] relative overflow-hidden group hover:border-[var(--color-neon-blue-dim)] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.04)_0%,transparent_60%)]"></div>
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[var(--color-neon-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-mono tracking-widest text-[var(--color-neon-blue)] flex items-center gap-2">
                <Wifi className="w-4 h-4" /> TOP_PORTS_V2
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-neon-blue)] bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.2)] px-2 py-0.5 rounded-full">
                ● Live
              </span>
            </div>
            <p className="text-[10px] font-mono text-[var(--color-cyber-text-dim)] uppercase tracking-widest mb-6">Sample Telemetry Data</p>

            {/* Bars */}
            <div className="space-y-5">
              {TOP_PORTS.map((p, i) => {
                const col = PORT_COLORS[i];
                const pct = (p.hosts / MAX_HOSTS) * 100;
                return (
                  <motion.div
                    key={p.port}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                  >
                    {/* Label row */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span
                          className="px-2 py-0.5 rounded text-[11px] font-mono font-bold border"
                          style={{ color: col.text, borderColor: col.bar, background: `${col.bar}18` }}
                        >
                          :{p.port}
                        </span>
                        <span className="text-xs font-mono text-[var(--color-cyber-text)] uppercase tracking-wider">{p.service}</span>
                      </div>
                      <span className="text-xs font-mono" style={{ color: col.text }}>{p.unit} hosts</span>
                    </div>
                    {/* Bar track */}
                    <div className="h-2 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden border border-[rgba(255,255,255,0.05)]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: 0.7 + i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: col.bar, boxShadow: `0 0 8px ${col.glow}` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Threat Map ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[rgba(15,15,20,0.4)] backdrop-blur-xl border border-[var(--color-cyber-border)] rounded-xl p-8 min-h-[400px] relative overflow-hidden group hover:border-[var(--color-neon-green-dim)] hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.04)_0%,transparent_60%)]"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--color-neon-green)] opacity-10 rounded-full blur-[50px] group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-green)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-mono tracking-widest text-[var(--color-neon-green)] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> THREAT_MAP
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-neon-yellow)] bg-[rgba(250,204,21,0.08)] border border-[rgba(250,204,21,0.25)] px-2 py-0.5 rounded-full">
                ● Alert
              </span>
            </div>
            <p className="text-[10px] font-mono text-[var(--color-cyber-text-dim)] uppercase tracking-widest mb-6">Sample Telemetry Data</p>

            {/* Country list */}
            <div className="space-y-4">
              {THREAT_SOURCES.map((t, i) => {
                const pct = (t.events / MAX_EVENTS) * 100;
                const color = THREAT_COLORS[i];
                return (
                  <motion.div
                    key={t.code}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                  >
                    {/* Label row */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-base leading-none">{t.flag}</span>
                        <span className="text-xs font-mono text-[var(--color-cyber-text)] tracking-wider">{t.country}</span>
                        <span className="text-[10px] font-mono text-[var(--color-cyber-text-dim)] border border-[var(--color-cyber-border)] px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.3)]">{t.code}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono" style={{ color }}>{t.label}</span>
                        <span className="text-[10px] text-[var(--color-cyber-text-dim)] font-mono">events</span>
                      </div>
                    </div>
                    {/* Bar track */}
                    <div className="h-1.5 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden border border-[rgba(255,255,255,0.05)]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: 0.8 + i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total */}
            <div className="mt-6 pt-4 border-t border-[var(--color-cyber-border)] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[var(--color-cyber-text-dim)] uppercase tracking-widest">Total Attack Events</span>
              <span className="text-sm font-mono font-bold text-[var(--color-neon-red)] shadow-[0_0_8px_rgba(244,63,94,0.4)]">11.8M</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
