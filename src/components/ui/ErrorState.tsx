import { AlertTriangle } from "lucide-react";

export function ErrorState({ title = "SYSTEM ERROR", message }: { title?: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 border border-(--color-neon-red-dim) bg-[rgba(255,42,42,0.05)] rounded-lg my-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,42,42,0.02)_0px,rgba(255,42,42,0.02)_10px,transparent_10px,transparent_20px)] pointer-events-none"></div>
      
      <div className="w-16 h-16 rounded-full bg-(--color-neon-red-dim) flex items-center justify-center mb-6 relative">
        <div className="absolute inset-0 rounded-full blur-md bg-(--color-neon-red) opacity-30 animate-pulse"></div>
        <AlertTriangle className="w-8 h-8 text-(--color-neon-red) relative z-10" />
      </div>
      
      <h3 className="text-xl font-bold font-mono text-(--color-neon-red) tracking-widest mb-2 z-10">{title}</h3>
      <div className="text-(--color-cyber-text-dim) text-center max-w-md font-mono text-sm leading-relaxed z-10 p-4 border-l-2 border-(--color-neon-red) bg-[#09090b]">
        {message}
      </div>
    </div>
  );
}
