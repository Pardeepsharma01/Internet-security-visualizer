"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Tag, Lock } from "lucide-react";

interface SecurityInfoProps {
  vulns?: string[];
  tags?: string[];
  ssl?: {
    cert?: {
      issuer?: { CN?: string; O?: string };
      subject?: { CN?: string; O?: string };
      expires?: string;
    };
    versions?: string[];
  };
}

export function SecurityInfo({ vulns, tags, ssl }: SecurityInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-(--color-cyber-surface) backdrop-blur-xl border border-(--color-cyber-border) rounded-xl p-0 overflow-hidden group hover:border-(--color-neon-red) transition-all relative shadow-lg h-full flex flex-col"
    >
      <div className="p-6 border-b border-(--color-cyber-border) bg-[rgba(0,0,0,0.4)] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--color-neon-red) to-transparent opacity-30"></div>
        <h3 className="text-lg font-mono tracking-widest text-(--color-neon-red) flex items-center gap-3 relative z-10">
          <ShieldAlert className="w-5 h-5" />
          SECURITY & VULNERABILITIES
        </h3>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-cyber-border)] scrollbar-track-transparent">
        {/* Vulnerabilities Section */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-(--color-cyber-text-dim) border-b border-(--color-cyber-border) pb-2 mb-3">
            Known CVEs
          </h4>
          {vulns && vulns.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {vulns.map((cve) => (
                <span
                  key={cve}
                  className="px-2 py-1 bg-[rgba(255,42,42,0.1)] border border-[rgba(255,42,42,0.3)] text-(--color-neon-red) text-xs font-mono rounded shadow-[0_0_5px_rgba(255,42,42,0.1)]"
                >
                  {cve}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-(--color-cyber-text-dim) text-xs font-mono italic">
              No vulnerabilities detected.
            </p>
          )}
        </div>

        {/* SSL Section */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-(--color-cyber-text-dim) border-b border-(--color-cyber-border) pb-2 mb-3 flex items-center gap-2">
            <Lock className="w-3 h-3" /> SSL / TLS Information
          </h4>
          {ssl ? (
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-(--color-cyber-border)">
                  <span className="block text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-1">
                    Subject
                  </span>
                  <span className="text-(--color-cyber-text) font-mono text-sm">
                    {ssl.cert?.subject?.CN || ssl.cert?.subject?.O || "N/A"}
                  </span>
                </div>
                <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-(--color-cyber-border)">
                  <span className="block text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-1">
                    Issuer
                  </span>
                  <span className="text-(--color-cyber-text) font-mono text-sm">
                    {ssl.cert?.issuer?.CN || ssl.cert?.issuer?.O || "N/A"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-(--color-cyber-border)">
                  <span className="block text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-1">
                    Expires
                  </span>
                  <span className="text-(--color-cyber-text) font-mono text-xs">
                    {ssl.cert?.expires || "N/A"}
                  </span>
                </div>
                <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-(--color-cyber-border)">
                  <span className="block text-[10px] text-(--color-cyber-text-dim) uppercase tracking-widest mb-1">
                    Supported Versions
                  </span>
                  <span className="text-(--color-neon-blue) font-mono text-xs">
                    {ssl.versions ? ssl.versions.join(", ") : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-(--color-cyber-text-dim) text-xs font-mono italic">
              No SSL information available.
            </p>
          )}
        </div>

        {/* Tags Section */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-(--color-cyber-text-dim) border-b border-(--color-cyber-border) pb-2 mb-3 flex items-center gap-2">
            <Tag className="w-3 h-3" /> System Tags
          </h4>
          {tags && tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[rgba(0,240,255,0.05)] border border-neon-blue-dim text-(--color-cyber-text) text-[10px] font-mono rounded uppercase tracking-widest"
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-(--color-cyber-text-dim) text-xs font-mono italic">
              No tags assigned.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
