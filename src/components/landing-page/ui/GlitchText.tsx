"use client";

import React from "react";

type GlitchTextProps = {
  text: string;
  className?: string;
};

export default function GlitchText({ text, className }: GlitchTextProps) {
  const cn = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <span className={cn("relative inline-block", className)}>
      <style>{`
        @keyframes glitch1 {
          0%,95%,100%{clip-path:inset(0 0 100% 0);transform:translate(0)}
          96%{clip-path:inset(20% 0 40% 0);transform:translate(-3px,1px)}
          97%{clip-path:inset(60% 0 10% 0);transform:translate(3px,-1px)}
          98%{clip-path:inset(5% 0 70% 0);transform:translate(-2px,2px)}
        }
        @keyframes glitch2 {
          0%,94%,100%{clip-path:inset(0 0 100% 0);transform:translate(0)}
          95%{clip-path:inset(40% 0 20% 0);transform:translate(3px,-2px)}
          96%{clip-path:inset(10% 0 60% 0);transform:translate(-3px,1px)}
          97%{clip-path:inset(70% 0 5% 0);transform:translate(2px,-1px)}
        }
      `}</style>

      {text}

      <span
        aria-hidden
        className="absolute inset-0 text-cyan-400"
        style={{ animation: "glitch1 6s infinite", opacity: 0.7 }}
      >
        {text}
      </span>

      <span
        aria-hidden
        className="absolute inset-0 text-blue-500"
        style={{ animation: "glitch2 6s infinite 0.3s", opacity: 0.5 }}
      >
        {text}
      </span>
    </span>
  );
}