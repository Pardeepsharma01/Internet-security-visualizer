"use client";

import { ShieldAlert, ShieldCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function RiskIndicator({ ports = [] }: { ports: number[] }) {
  let riskLevel = "LOW RISK";
  let colorClass = "text-[var(--color-neon-green)]";
  let bgClass = "bg-[rgba(57,255,20,0.1)]";
  let borderClass = "border-[rgba(57,255,20,0.3)]";
  let shadowClass = "shadow-[0_0_15px_rgba(57,255,20,0.15)]";
  let glowColor = "var(--color-neon-green)";
  let Icon = ShieldCheck;

  const dbPorts = [3306, 5432, 27017, 1433, 6379, 11211];
  const medPorts = [21, 22, 23, 25, 110, 143, 3389];

  const hasDbPort = ports.some(p => dbPorts.includes(p));
  const hasMedPort = ports.some(p => medPorts.includes(p));

  //  NO EXPOSURE
  if (ports.length === 0) {
    riskLevel = "NO EXPOSURE";
    colorClass = "text-[var(--color-neon-blue)]";
    bgClass = "bg-[rgba(0,240,255,0.08)]";
    borderClass = "border-[rgba(0,240,255,0.3)]";
    shadowClass = "shadow-[0_0_10px_rgba(0,240,255,0.15)]";
    glowColor = "var(--color-neon-blue)";
    Icon = ShieldCheck;

  //  CRITICAL
  } else if (hasDbPort && ports.length > 3) {
    riskLevel = "CRITICAL RISK";
    colorClass = "text-[var(--color-neon-red)]";
    bgClass = "bg-[rgba(255,42,42,0.1)]";
    borderClass = "border-[var(--color-neon-red)]";
    shadowClass = "shadow-[0_0_20px_rgba(255,42,42,0.3)]";
    glowColor = "var(--color-neon-red)";
    Icon = ShieldAlert;

  //  HIGH
  } else if (hasDbPort || ports.length > 7) {
    riskLevel = "HIGH RISK";
    colorClass = "text-orange-400";
    bgClass = "bg-[rgba(251,146,60,0.1)]";
    borderClass = "border-[rgba(251,146,60,0.5)]";
    shadowClass = "shadow-[0_0_15px_rgba(251,146,60,0.2)]";
    glowColor = "#fb923c";
    Icon = ShieldAlert;

  //  ELEVATED
  } else if (hasMedPort || ports.length > 3) {
    riskLevel = "ELEVATED RISK";
    colorClass = "text-[var(--color-neon-yellow)]";
    bgClass = "bg-[rgba(250,204,21,0.1)]";
    borderClass = "border-[rgba(250,204,21,0.5)]";
    shadowClass = "shadow-[0_0_15px_rgba(250,204,21,0.2)]";
    glowColor = "var(--color-neon-yellow)";
    Icon = Shield;
  }

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs font-bold tracking-[0.2em] font-mono relative overflow-hidden backdrop-blur-md ${borderClass} ${bgClass} ${colorClass} ${shadowClass}`}
    >
      <motion.div 
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}22 0%, transparent 70%)`
        }}
      />
      
      <Icon className={`w-4 h-4 relative z-10 ${riskLevel === "CRITICAL RISK" ? 'animate-pulse' : ''}`} />
      <span className="relative z-10 pt-0.5">{riskLevel}</span>
      
      <div className="flex gap-1 relative z-10 ml-2">
        <span className={`w-1 h-1 rounded-full ${riskLevel === "LOW RISK" ? 'bg-(--color-neon-green) opacity-20' : 'bg-current opacity-100 animate-ping'}`} style={{animationDelay: '0ms'}}></span>
        <span className={`w-1 h-1 rounded-full ${riskLevel === "CRITICAL RISK" || riskLevel === "ELEVATED RISK" || riskLevel === "HIGH RISK" ? 'bg-current opacity-100 animate-ping' : 'bg-(--color-neon-green) opacity-20'}`} style={{animationDuration: '1.2s', animationDelay: '200ms'}}></span>
        <span className={`w-1 h-1 rounded-full ${riskLevel === "CRITICAL RISK" ? 'bg-current opacity-100 animate-ping' : 'bg-current opacity-20'}`} style={{animationDuration: '1.5s', animationDelay: '400ms'}}></span>
      </div>
    </motion.div>
  );
}
// "use client";

// import { ShieldAlert, ShieldCheck, Shield } from "lucide-react";
// import { motion } from "framer-motion";

// export function RiskIndicator({ ports = [] }: { ports: number[] }) {
//   let riskLevel = "LOW RISK";
//   let colorClass = "text-[var(--color-neon-green)]";
//   let bgClass = "bg-[rgba(57,255,20,0.1)]";
//   let borderClass = "border-[rgba(57,255,20,0.3)]";
//   let shadowClass = "shadow-[0_0_15px_rgba(57,255,20,0.15)]";
//   let glowColor = "var(--color-neon-green)";
//   let Icon = ShieldCheck;

//   const dbPorts = [3306, 5432, 27017, 1433, 6379, 11211];
//   const medPorts = [21, 22, 23, 25, 110, 143, 3389];

//   if (ports.some(p => dbPorts.includes(p))) {
//     riskLevel = "CRITICAL RISK";
//     colorClass = "text-[var(--color-neon-red)]";
//     bgClass = "bg-[rgba(255,42,42,0.1)]";
//     borderClass = "border-[var(--color-neon-red)]";
//     shadowClass = "shadow-[0_0_20px_rgba(255,42,42,0.3)]";
//     glowColor = "var(--color-neon-red)";
//     Icon = ShieldAlert;
//   } else if (ports.some(p => medPorts.includes(p)) || ports.length > 5) {
//     riskLevel = "ELEVATED RISK";
//     colorClass = "text-[var(--color-neon-yellow)]";
//     bgClass = "bg-[rgba(250,204,21,0.1)]";
//     borderClass = "border-[rgba(250,204,21,0.5)]";
//     shadowClass = "shadow-[0_0_15px_rgba(250,204,21,0.2)]";
//     glowColor = "var(--color-neon-yellow)";
//     Icon = Shield;
//   }

//   return (
//     <motion.div 
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs font-bold tracking-[0.2em] font-mono relative overflow-hidden backdrop-blur-md ${borderClass} ${bgClass} ${colorClass} ${shadowClass}`}
//     >
//       <motion.div 
//         animate={{ opacity: [0.3, 0.8, 0.3] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(circle at center, ${glowColor}22 0%, transparent 70%)`
//         }}
//       />
      
//       <Icon className={`w-4 h-4 relative z-10 ${riskLevel === "CRITICAL RISK" ? 'animate-pulse' : ''}`} />
//       <span className="relative z-10 pt-0.5">{riskLevel}</span>
      
//       {/* Decorative dots */}
//       <div className="flex gap-1 relative z-10 ml-2">
//         <span className={`w-1 h-1 rounded-full ${riskLevel === "LOW RISK" ? 'bg-(--color-neon-green) opacity-20' : 'bg-current opacity-100 animate-ping'}`} style={{animationDelay: '0ms'}}></span>
//         <span className={`w-1 h-1 rounded-full ${riskLevel === "CRITICAL RISK" || riskLevel === "ELEVATED RISK" ? 'bg-current opacity-100 animate-ping' : 'bg-[var(--color-neon-green)] opacity-20'}`} style={{animationDuration: '1.2s', animationDelay: '200ms'}}></span>
//         <span className={`w-1 h-1 rounded-full ${riskLevel === "CRITICAL RISK" ? 'bg-current opacity-100 animate-ping' : 'bg-current opacity-20'}`} style={{animationDuration: '1.5s', animationDelay: '400ms'}}></span>
//       </div>
//     </motion.div>
//   );
// }
