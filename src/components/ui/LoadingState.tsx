import { Loader2 } from "lucide-react";

export function LoadingState({ message = "Analyzing Target..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 h-full min-h-[400px]">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-md bg-[var(--color-neon-blue)] opacity-50 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <Loader2 className="w-12 h-12 text-[var(--color-neon-blue)] animate-spin relative z-10" />
      </div>
      <p className="mt-6 text-[var(--color-neon-blue)] font-mono tracking-widest text-sm animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]">
        {message}
      </p>
      <div className="mt-4 flex gap-1">
        <div className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-full animate-[bounce_1s_infinite_0ms]"></div>
        <div className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-full animate-[bounce_1s_infinite_400ms]"></div>
      </div>
    </div>
  );
}
