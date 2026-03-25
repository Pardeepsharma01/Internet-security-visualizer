import { SearchBar } from "@/components/ui/SearchBar";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-0">
      <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
        <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-(--color-neon-blue-dim) mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-(--color-neon-blue) opacity-20 blur-xl animate-[pulse_3s_infinite]"></div>
          <Shield className="w-12 h-12 text-(--color-neon-blue) relative z-10" />
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-widest text-(--color-cyber-text) mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          TARGET{" "}
          <span className="text-(--color-neon-blue)">ACQUISITION</span>
        </h2>
        <p className="text-(--color-cyber-text-dim) font-mono max-w-lg mx-auto text-sm uppercase tracking-widest leading-relaxed">
          Enter an IPv4 or IPv6 address to initiate deep reconnaissance. System
          will query global network nodes.
        </p>
      </div>

      <div className="w-full max-w-2xl px-4 relative z-10 animate-in slide-in-from-bottom-8 fade-in duration-1000">
        <SearchBar />
      </div>

      <div className="mt-16 flex flex-wrap justify-center text-[10px] md:text-xs text-(--color-cyber-text-dim) font-mono items-center gap-4 md:gap-8 opacity-50 animate-in fade-in duration-1000 delay-500">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-(--color-neon-blue) block shadow-[0_0_5px_var(--color-neon-blue)] animate-pulse"></span>
          SECURE_CONNECTION
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-(--color-neon-green) block shadow-[0_0_5px_var(--color-neon-green)] animate-pulse"></span>
          PROXIES_ACTIVE
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-(--color-neon-yellow) block shadow-[0_0_5px_var(--color-neon-yellow)] animate-pulse"></span>
          LOGGING_DISABLED
        </span>
      </div>
    </div>
  );
}
