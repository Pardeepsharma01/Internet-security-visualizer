"use client";

import { Server, Building, Info, FileStack, Network } from "lucide-react";
import { RiskIndicator } from "./RiskIndicator";
import { motion, Variants } from "framer-motion";

interface ServerInfoProps {
  data: {
    ip: string;
    city?: string;
    country_name?: string;
    org?: string;
    isp?: string;
    asn?: string;
    os?: string;
    hostnames?: string[];
    ports?: number[];
  };
}

export function ServerInfoCard({ data }: ServerInfoProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-(--color-cyber-surface) backdrop-blur-xl border border-(--color-cyber-border) rounded-xl p-8 relative overflow-hidden group shadow-2xl h-full"
    >
      {/* Animated gradient background blob */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-(--color-neon-blue) rounded-full mix-blend-screen filter blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

      {/* Subtle border top glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--color-neon-blue-dim) to-transparent"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-(--color-cyber-border) pb-6 relative z-10 gap-4">
        <div>
          <h2 className="text-3xl font-mono tracking-wider font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-(--color-neon-blue) flex items-center gap-3 drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
            <Server className="w-8 h-8 text-(--color-neon-blue)" />
            {data.ip}
          </h2>
          <p className="text-(--color-cyber-text-dim) text-xs font-mono uppercase mt-2 tracking-[0.2em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-neon-green) shadow-[0_0_5px_var(--color-neon-green)] animate-pulse"></span>
            Host &amp; Network Identification
          </p>
        </div>
        <RiskIndicator ports={data.ports || []} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.3)] border border-(--color-cyber-border) hover:border-(--color-neon-blue-dim) hover:bg-[rgba(0,240,255,0.03)] transition-all"
        >
          <div className="p-2 bg-[rgba(0,240,255,0.1)] rounded-md border border-neon-blue-dim">
            <Network className="w-5 h-5 text-(--color-neon-blue)" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="text-[10px] uppercase tracking-wider text-(--color-cyber-text-dim) font-mono mb-1">
              ISP / ASN
            </div>
            <div className="font-medium text-(--color-cyber-text) truncate">
              {data.isp || "N/A"}{" "}
              <span className="text-(--color-neon-blue) text-xs ml-1">
                {data.asn || ""}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.3)] border border-(--color-cyber-border) hover:border-(--color-neon-blue-dim) hover:bg-[rgba(0,240,255,0.03)] transition-all"
        >
          <div className="p-2 bg-[rgba(0,240,255,0.1)] rounded-md border border-neon-blue-dim">
            <Building className="w-5 h-5 text-(--color-neon-blue)" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="text-[10px] uppercase tracking-wider text-(--color-cyber-text-dim) font-mono mb-1">
              Organization
            </div>
            <div className="font-medium text-(--color-cyber-text) truncate">
              {data.org || "N/A"}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.3)] border border-(--color-cyber-border) hover:border-(--color-neon-blue-dim) hover:bg-[rgba(0,240,255,0.03)] transition-all"
        >
          <div className="p-2 bg-[rgba(0,240,255,0.1)] rounded-md border border-neon-blue-dim">
            <Info className="w-5 h-5 text-(--color-neon-blue)" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="text-[10px] uppercase tracking-wider text-(--color-cyber-text-dim) font-mono mb-1">
              Operating System
            </div>
            <div className="font-medium text-(--color-cyber-text) truncate">
              {data.os || "N/A"}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.3)] border border-(--color-cyber-border) hover:border-(--color-neon-blue-dim) hover:bg-[rgba(0,240,255,0.03)] transition-all"
        >
          <div className="p-2 bg-[rgba(0,240,255,0.1)] rounded-md border border-neon-blue-dim">
            <FileStack className="w-5 h-5 text-(--color-neon-blue)" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="text-[10px] uppercase tracking-wider text-(--color-cyber-text-dim) font-mono mb-1">
              Hostnames
            </div>
            <div
              className="font-medium text-(--color-cyber-text) truncate"
              title={data.hostnames?.join(", ")}
            >
              {data.hostnames?.length ? data.hostnames.join(", ") : "N/A"}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
