"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TerminalLineProps = {
  text: string;
  delay?: number;
  color?: string;
};

export default function TerminalLine({
  text,
  delay = 0,
  color = "#00E5FF",
}: TerminalLineProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      className="font-mono text-xs flex items-center gap-2 py-0.5"
    >
      <span style={{ color: "#10B981" }}>›</span>

      <span style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>
        {text}
      </span>
    </motion.div>
  );
}