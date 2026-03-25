"use client";

import { useEffect, useState } from "react";

export function CyberLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.2 s, fully remove from DOM after transition
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => setVisible(false), 1700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-cyber-bg transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* ── Animated grid background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal scan line — uses @keyframes scanY from globals.css */}
        <div className="absolute left-0 right-0 h-px bg-neon-blue/30 animate-[scanY_2.5s_linear_infinite]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-neon-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-blue) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Corner brackets */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-neon-blue/60" />
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-neon-blue/60" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-neon-blue/60" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-neon-blue/60" />
      </div>

      {/* ── Center content ── */}
      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Rings */}
        <div className="relative flex items-center justify-center w-28 h-28">
          {/* Outer glow ping */}
          <div className="absolute inset-0 rounded-full bg-neon-blue/10 animate-ping" />
          {/* Outer ring – slow spin */}
          <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-[spin_8s_linear_infinite]" />
          {/* Middle dashed ring – reverse spin */}
          <div className="absolute inset-2 rounded-full border border-dashed border-neon-blue/40 animate-[spin_3s_linear_infinite_reverse]" />
          {/* Inner glow ring */}
          <div className="absolute inset-4 rounded-full border-2 border-neon-blue/80 shadow-[0_0_24px_var(--color-neon-blue),0_0_48px_rgba(0,240,255,0.25)] animate-[spin_5s_linear_infinite]" />
          {/* Core dot */}
          <div className="w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_20px_var(--color-neon-blue),0_0_40px_rgba(0,240,255,0.5)] animate-pulse" />
        </div>

        {/* Title block */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-neon-blue text-xl font-bold tracking-[0.3em] uppercase animate-pulse">
            CYBER.SYS
          </p>
          <p className="font-mono text-cyber-text-dim text-xs tracking-[0.5em] uppercase">
            INITIALIZING SECURITY MATRIX...
          </p>
        </div>

        {/* Progress bar — uses @keyframes progressBar from globals.css */}
        <div className="w-64 h-px bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 bg-linear-to-r from-transparent via-neon-blue to-transparent animate-[progressBar_1.5s_ease-in-out_infinite]" />
        </div>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 200, 400].map((delay) => (
            <div
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_6px_var(--color-neon-blue)] animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
