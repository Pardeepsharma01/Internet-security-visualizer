import { Shield, Menu } from "lucide-react";

interface NavbarProps {
  onMenuToggle?: () => void;
}

export function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <header className="h-16 border-b border-(--color-cyber-border) bg-(--color-cyber-surface) flex items-center px-4 md:px-6 justify-between shrink-0 z-30 relative">
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg border border-(--color-cyber-border) text-(--color-cyber-text-dim) hover:text-(--color-neon-blue) hover:border-(--color-neon-blue-dim) transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Shield className="text-(--color-neon-blue) w-6 h-6 animate-pulse" />
        <h1 className="text-base md:text-xl font-bold tracking-wider text-(--color-cyber-text)">
          <span className="hidden sm:inline">INTERNET </span>
          <span className="text-(--color-neon-blue) drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            SECURITY
          </span>
          <span className="hidden sm:inline"> VISUALIZER</span>
        </h1>
      </div>

      <div className="flex items-center gap-4 text-xs md:text-sm text-(--color-cyber-text-dim) font-mono">
        <span className="flex items-center gap-2 border border-(--color-cyber-border) px-3 py-1 rounded-full bg-(--color-cyber-bg)">
          <span className="w-2 h-2 rounded-full bg-(--color-neon-green) shadow-[0_0_8px_var(--color-neon-green)] animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          SYS.ONLINE
        </span>
      </div>
    </header>
  );
}
