"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Image as ImageIcon } from "lucide-react";

interface WebTechInfoProps {
  http?: {
    title?: string;
    favicon?: { hash?: number };
    components?: Record<string, string[]>;
  };
}

export function WebTechInfo({ http }: WebTechInfoProps) {
  if (!http) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-(--color-cyber-surface) backdrop-blur-xl border border-(--color-cyber-border) rounded-xl p-0 overflow-hidden group hover:border-(--color-neon-purple) transition-all relative shadow-lg h-full flex flex-col"
    >
      <div className="p-6 border-b border-(--color-cyber-border) bg-[rgba(0,0,0,0.4)] relative">
        <div className="absolute top-0 right-0 w-full h-px bg-linear-to-l from-transparent via-(--color-neon-purple) to-transparent opacity-30"></div>
        <h3 className="text-lg font-mono tracking-widest text-(--color-neon-purple) flex items-center gap-3 relative z-10">
          <Globe className="w-5 h-5" />
          WEB TECHNOLOGY STACK
        </h3>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-cyber-border)] scrollbar-track-transparent">
        {/* HTML Title & Favicon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-(--color-cyber-border)">
            <span className="flex items-center gap-2 text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-2 border-b border-(--color-cyber-border) pb-1">
              <Code2 className="w-3 h-3" /> HTML Page Title
            </span>
            <span
              className="text-(--color-cyber-text) font-mono text-sm block truncate w-full"
              title={http.title}
            >
              {http.title || "N/A"}
            </span>
          </div>

          <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-(--color-cyber-border)">
            <span className="flex items-center gap-2 text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-2 border-b border-(--color-cyber-border) pb-1">
              <ImageIcon className="w-3 h-3" /> Favicon Hash
            </span>
            <span className="text-(--color-neon-blue) font-mono text-sm">
              {http.favicon?.hash !== undefined ? http.favicon.hash : "N/A"}
            </span>
          </div>
        </div>

        {/* Components / HTTP Headers (mapped from components in this mock) */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-(--color-cyber-text-dim) border-b border-(--color-cyber-border) pb-2 mb-3">
            Detected Web Components
          </h4>
          {http.components && Object.keys(http.components).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(http.components).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center bg-[rgba(0,0,0,0.2)] px-3 py-2 rounded border border-(--color-cyber-border)"
                >
                  <span className="text-(--color-cyber-text) text-xs font-mono">
                    {key}
                  </span>
                  {value && value.length > 0 && (
                    <span className="text-(--color-cyber-text-dim) text-[10px] font-mono bg-[#09090b] px-2 py-0.5 rounded border border-(--color-cyber-border)">
                      v{value[0]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-(--color-cyber-text-dim) text-xs font-mono italic">
              No web components detected.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
