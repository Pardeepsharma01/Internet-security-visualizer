"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
  delay?: number;
}

export function StatsCard({
  title,
  value,
  icon,
  trend,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-(--color-cyber-surface) backdrop-blur-md border border-(--color-cyber-border) rounded-xl p-6 relative overflow-hidden group hover:border-(--color-neon-blue) hover:shadow-[0_0_20px_var(--color-neon-blue-dim)] transition-all duration-300"
    >
      {/* Background Gradient Effect */}
      <div className="absolute -inset-0.5 bg-linear-to-br from-(--color-neon-blue-dim) to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md z-0 pointer-events-none"></div>

      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-(--color-cyber-text-dim) text-xs font-mono uppercase tracking-wider mb-2">
            {title}
          </p>
          <motion.h3
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl font-black font-mono text-transparent bg-clip-text bg-linear-to-r from-white to-(--color-cyber-text-dim) group-hover:from-(--color-neon-blue) group-hover:to-white transition-all"
          >
            {value}
          </motion.h3>

          {trend && (
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono flex items-center gap-1 ${trend.isUp ? "bg-[rgba(255,42,42,0.1)] text-(--color-neon-red) border border-neon-red-dim" : "bg-[rgba(57,255,20,0.1)] text-(--color-neon-green) border border-neon-green-dim"}`}
              >
                {trend.isUp ? "↑" : "↓"} {trend.value}
              </span>
              <span className="text-[10px] text-(--color-cyber-text-dim) font-mono uppercase">
                vs last month
              </span>
            </div>
          )}
        </div>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="p-3 bg-[rgba(0,0,0,0.4)] backdrop-blur rounded-lg border border-(--color-cyber-border) text-(--color-neon-blue) group-hover:shadow-[0_0_15px_var(--color-neon-blue-dim)] group-hover:border-(--color-neon-blue-dim) transition-all"
        >
          {icon}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-linear-to-r from-(--color-neon-blue) via-(--color-neon-purple) to-transparent w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>
    </motion.div>
  );
}
