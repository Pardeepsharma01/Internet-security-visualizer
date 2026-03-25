"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, Globe, Info, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/ip-analyzer", label: "IP Analyzer", icon: Search },
  { href: "/global-stats", label: "Global Stats", icon: Globe },
  { href: "/about", label: "About", icon: Info },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-(--color-cyber-border) bg-[rgba(3,3,5,0.95)] backdrop-blur-xl flex flex-col shrink-0 h-full relative overflow-hidden z-20">
      {/* Decorative scan lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, var(--color-neon-blue) 1px, var(--color-neon-blue) 2px)",
          backgroundSize: "100% 4px",
        }}
      />
      <div className="absolute top-0 right-0 w-px h-full bg-linear-to-b from-transparent via-(--color-neon-blue-dim) to-transparent opacity-50" />

      {/* Mobile close button */}
      {onClose && (
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-(--color-cyber-border) text-(--color-cyber-text-dim) hover:text-(--color-neon-blue) hover:border-(--color-neon-blue-dim) transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <nav className="flex-1 py-8 px-4 space-y-3 relative z-10">
        <div className="text-[10px] font-mono text-(--color-cyber-text-dim) mb-6 px-2 uppercase tracking-[0.2em] flex items-center gap-2">
          <span className="w-1 h-1 bg-(--color-cyber-text-dim) rounded-full" />
          Navigation Menu
        </div>

        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="block"
              onClick={onClose}
            >
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={clsx(
                  "group flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 border font-mono uppercase tracking-widest text-xs relative overflow-hidden",
                  isActive
                    ? "bg-[rgba(0,240,255,0.05)] text-(--color-neon-blue) border-neon-blue-dim shadow-[0_0_20px_rgba(0,240,255,0.05)_inset]"
                    : "text-(--color-cyber-text-dim) border-transparent hover:bg-[rgba(255,255,255,0.02)] hover:text-(--color-cyber-text) hover:border-[rgba(255,255,255,0.05)]",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-(--color-neon-blue) shadow-[0_0_10px_var(--color-neon-blue)] rounded-r-md"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,240,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Icon
                  className={clsx(
                    "w-4 h-4 transition-transform duration-500",
                    isActive
                      ? "text-(--color-neon-blue) drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] scale-110"
                      : "text-(--color-cyber-text-dim) group-hover:text-(--color-cyber-text)",
                  )}
                />
                <span className="relative z-10">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t border-(--color-cyber-border) text-[10px] text-center text-(--color-cyber-text-dim) font-mono tracking-[0.2em] relative z-10 bg-[rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--color-cyber-border-glow) to-transparent opacity-30" />
        <div className="w-full flex justify-between px-2 mb-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-neon-blue) animate-pulse" />{" "}
            TX: 0.00kbps
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full bg-(--color-neon-green) animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />{" "}
            RX: 0.00kbps
          </span>
        </div>
        <span className="px-2 py-1 bg-[rgba(0,0,0,0.5)] rounded border border-(--color-cyber-border)">
          DATA{" "}
        </span>
      </div>
    </aside>
  );
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar — always visible */}
      <div className="hidden lg:flex h-full">
        <SidebarContent />
      </div>

      {/* Mobile sidebar — slide-in drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 left-0 h-full z-50 lg:hidden"
            >
              <SidebarContent onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
