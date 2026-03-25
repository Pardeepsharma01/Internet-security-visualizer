"use client";

import { useState, useEffect } from "react";
import { Search, History, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function SearchBar() {
  const [ip, setIp] = useState("");
  const [recentScans, setRecentScans] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const history = localStorage.getItem("scanHistory");
    if (history) {
      try {
        setRecentScans(JSON.parse(history));
      } catch (e) {}
    }
  }, []);

  const saveToHistoryAndSearch = (searchIp: string) => {
    if (searchIp.trim()) {
      const newHistory = [
        searchIp,
        ...recentScans.filter((item) => item !== searchIp),
      ].slice(0, 5);
      setRecentScans(newHistory);
      localStorage.setItem("scanHistory", JSON.stringify(newHistory));
      router.push(`/ip-analyzer?ip=${encodeURIComponent(searchIp)}`);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    saveToHistoryAndSearch(ip.trim());
  };

  const exampleIps = ["8.8.8.8", "1.1.1.1", "104.16.132.229"];

  return (
    <div className="w-full flex flex-col gap-4">
      <form onSubmit={handleSearch} className="relative w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center group"
        >
          <div className="absolute -inset-0.5 bg-linear-to-r from-(--color-neon-blue) to-(--color-neon-purple) rounded-lg blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>

          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="ENTER TARGET IP ADDRESS..."
            className="relative w-full bg-[rgba(10,10,15,0.8)] backdrop-blur-md text-(--color-cyber-text) border border-(--color-cyber-border) rounded-lg pl-6 pr-16 py-5 focus:outline-none focus:border-(--color-neon-blue) transition-all font-mono placeholder:text-(--color-cyber-text-dim) tracking-widest text-sm shadow-xl"
          />

          <button
            type="submit"
            className="absolute right-3 px-4 py-3 bg-[rgba(0,240,255,0.1)] border border-neon-blue-dim text-(--color-neon-blue) hover:bg-(--color-neon-blue) hover:text-black rounded-md transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] group-focus-within:border-[rgba(0,240,255,0.5)]"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cyber corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-(--color-neon-blue) pointer-events-none opacity-50 group-focus-within:opacity-100 transition-opacity rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-(--color-neon-purple) pointer-events-none opacity-50 group-focus-within:opacity-100 transition-opacity rounded-br-lg"></div>
        </motion.div>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-(--color-cyber-text-dim) flex items-center gap-1">
            <Zap className="w-3 h-3" /> Try:
          </span>
          {exampleIps.map((exIp) => (
            <button
              type="button"
              key={exIp}
              onClick={() => {
                setIp(exIp);
                saveToHistoryAndSearch(exIp);
              }}
              className="px-2 py-1 bg-[rgba(0,0,0,0.3)] border border-(--color-cyber-border) rounded text-(--color-cyber-text) hover:text-(--color-neon-blue) hover:border-(--color-neon-blue-dim) transition-colors cursor-pointer"
            >
              {exIp}
            </button>
          ))}
        </div>

        {recentScans.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-(--color-cyber-text-dim) flex items-center gap-1">
              <History className="w-3 h-3" /> Recent Scans:
            </span>
            {recentScans.map((rIp) => (
              <button
                type="button"
                key={rIp}
                onClick={() => {
                  setIp(rIp);
                  saveToHistoryAndSearch(rIp);
                }}
                className="px-2 py-1 bg-[rgba(0,240,255,0.05)] border border-neon-blue-dim rounded text-(--color-neon-blue) hover:bg-[rgba(0,240,255,0.1)] transition-colors cursor-pointer"
              >
                {rIp}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
