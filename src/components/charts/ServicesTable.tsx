"use client";

import { motion } from "framer-motion";

interface ServiceData {
  port: number;
  product?: string;
  version?: string;
  transport?: string;
  cpe?: string[];
  data?: string;
}

interface ServicesTableProps {
  services: ServiceData[];
}

export function ServicesTable({ services = [] }: ServicesTableProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[var(--color-cyber-surface)] backdrop-blur-xl border border-[var(--color-cyber-border)] rounded-xl p-0 overflow-hidden group hover:border-[var(--color-neon-blue-dim)] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all relative shadow-lg h-full"
    >
      <div className="p-6 border-b border-[var(--color-cyber-border)] bg-[rgba(0,0,0,0.4)] backdrop-blur-md relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(0,240,255,0.05)] to-transparent pointer-events-none"></div>
        <h3 className="text-lg font-mono tracking-widest text-[var(--color-neon-blue)] flex items-center gap-3 relative z-10">
          <span className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-sm flex shadow-[0_0_8px_var(--color-neon-blue)]"></span>
          SERVICE MAPPING
        </h3>
      </div>
      
      <div className="overflow-x-auto relative z-10 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-cyber-border)] scrollbar-track-transparent">
        <table className="w-full text-left font-mono text-sm whitespace-nowrap">
          <thead className="bg-[#0f0f14] text-[var(--color-cyber-text-dim)] text-xs uppercase tracking-wider sticky top-0 z-20 shadow-md">
            <tr>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">Port</th>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">Protocol</th>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">Product</th>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">Version</th>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">CPE</th>
              <th className="px-6 py-4 font-medium border-b border-[var(--color-cyber-border)]">Banner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-cyber-border)] bg-transparent">
            {services.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-[var(--color-cyber-text-dim)]">
                  <div className="flex flex-col items-center justify-center opacity-70">
                    <span className="text-3xl mb-3">⊘</span>
                    <span className="font-mono text-xs tracking-widest">NO_SERVICES_DETECTED</span>
                  </div>
                </td>
              </tr>
            ) : (
              services.map((service, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.05) }}
                  key={`${service.port}-${idx}`} 
                  className="hover:bg-[rgba(0,240,255,0.05)] transition-colors group/row cursor-default bg-[rgba(0,0,0,0.2)]"
                >
                  <td className="px-6 py-4 text-[var(--color-neon-blue)] font-bold relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-neon-blue)] scale-y-0 group-hover/row:scale-y-100 transition-transform origin-center shadow-[0_0_10px_var(--color-neon-blue)]"></div>
                    <span className="bg-[rgba(0,240,255,0.1)] px-2 py-1 rounded border border-[rgba(0,240,255,0.2)]">
                      {service.port}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-cyber-text)] uppercase text-xs tracking-wider">{service.transport || "N/A"}</td>
                  <td className="px-6 py-4 text-[var(--color-cyber-text)]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-purple)]"></span>
                      {service.product || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-cyber-text-dim)]">{service.version || "N/A"}</td>
                  <td className="px-6 py-4 text-[var(--color-cyber-text-dim)] text-xs">
                     <div className="max-w-[150px] truncate" title={service.cpe?.join(", ")}>
                        {service.cpe?.length ? service.cpe[0] : "N/A"}
                     </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--color-cyber-text-dim)] text-xs">
                    <div className="max-w-[200px] truncate" title={service.data}>
                      {service.data ? service.data.split('\n')[0] : "N/A"}
                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
