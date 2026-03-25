"use client";

import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "blue" | "emerald";
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "cyan",
}: GlassCardProps) {
  const cn = (...classes: (string | undefined | false)[]) =>
    classes.filter(Boolean).join(" ");

  const glowColor =
    glow === "cyan"
      ? "hover:shadow-cyan-500/20"
      : glow === "blue"
      ? "hover:shadow-blue-500/20"
      : "hover:shadow-emerald-500/20";

  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl",
        hover &&
          `transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl ${glowColor} cursor-pointer`,
        className
      )}
    >
      {children}
    </div>
  );
}