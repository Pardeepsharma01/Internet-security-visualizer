"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Features", href: "#features" },
  { label: "Working", href: "#how-it-works" },
  { label: "Preview", href: "#dashboard-preview" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const cn = (...classes: (string | boolean | undefined)[]) =>
    classes.filter(Boolean).join(" ");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B0F19]/90 backdrop-blur-lg border-b border-white/10 py-3"
          : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg border border-cyan-400/60 animate-pulse" />

            <div
              className="absolute inset-1 rounded-md flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #00E5FF22, #3B82F622)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          <span
            className="hidden sm:block text-sm font-bold tracking-widest uppercase"
            style={{
              fontFamily: "'Orbitron', monospace",
              color: "#00E5FF",
              letterSpacing: "0.15em",
            }}
          >
            ISV
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
            <Link href={"/dashboard"}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, #00E5FF, #3B82F6)",
              fontFamily: "'Orbitron', monospace",
              letterSpacing: "0.05em",
            }}
          >
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
            Launch Dashboard
          </motion.button>
            </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
            <Link href={"/dashboard"}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#0B0F19]/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {label}
                </a>
              ))}

              <button
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-black"
                style={{
                  background:
                    "linear-gradient(135deg, #00E5FF, #3B82F6)",
                }}
              >
                Launch Dashboard
              </button>
            </div>
          </motion.div>
            </Link>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}