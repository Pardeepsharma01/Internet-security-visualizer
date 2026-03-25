"use client";
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto font-mono text-justify">
      <div className="mb-8 pb-6 border-b border-(--color-cyber-border)">
        <h1 className="text-2xl font-mono tracking-widest text-(--color-cyber-text) mb-2 inline-flex items-center gap-3">
          <span className="w-3 h-3 bg-(--color-neon-yellow) block shadow-[0_0_10px_var(--color-neon-yellow)]"></span>
          SYSTEM_INFORMATION
        </h1>
        <p className="text-(--color-cyber-text-dim) font-mono text-sm uppercase tracking-wide">
          About Internet Security Visualizer v1.0
        </p>
      </div>

      <div className="prose prose-invert prose-p:font-mono prose-p:text-sm prose-p:leading-relaxed prose-headings:font-mono max-w-none bg-(--color-cyber-surface) p-8 border border-(--color-cyber-border) rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-neon-blue) opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <h3 className="text-(--color-neon-blue) tracking-widest mb-4 font-mono">
          PLATFORM OVERVIEW
        </h3>
        <p className="text-(--color-cyber-text-dim) mb-6 font-mono">
          Internet Security Visualizer is an interactive cybersecurity dashboard
          that helps users understand the external exposure of any public IP
          address.
          <br />
          <br />
          It transforms complex network intelligence into a clean and visual
          format, making it easier to analyze open ports, services, and
          potential security risks without deep technical effort.
        </p>

        <h3 className="text-(--color-neon-blue) tracking-widest mt-8 mb-4 font-mono">
          CORE CAPABILITIES
        </h3>
        <ul className="text-(--color-cyber-text-dim) font-mono text-sm space-y-3 mb-6 list-none p-0">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>IP
            intelligence lookup (ISP, ASN, hostnames)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>Open
            port detection and service mapping
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Geolocation visualization with interactive maps
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>Basic
            risk indication based on exposed services
          </li>
        </ul>

        <h3 className="text-(--color-neon-blue) tracking-widest mt-8 mb-4">
          DATA INTEGRATION
        </h3>
        <p className="text-(--color-cyber-text-dim) mb-6">
          This application integrates with Shodan API to fetch real-world
          internet data.
          <br />
          <br />A custom API layer is used to handle requests securely, optimize
          responses, and ensure smooth rendering on the frontend.ISV acts
          strictly as a visualization layer. We do not store, log, or track your
          IP search history.
        </p>

        <h3 className="text-(--color-neon-blue) tracking-widest mt-8 mb-4">
          WHO IS THIS FOR?
        </h3>
        <ul className="text-(--color-cyber-text-dim) font-mono text-sm space-y-3 mb-6 list-none p-0">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>{" "}
            Security Analysts: Quickly verify exposed ports,
            active services, and critical vulnerabilities (CVEs) during
            reconnaissance.
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>{" "}
            IT Administrators: RAudit your organization's
            external infrastructure and monitor potential security risks before
            they are exploited.
            </li>
  
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>{" "}
            OSINT Researchers: Gather comprehensive, structured
            intelligence on target nodes without writing custom scripts.
          </li>
        </ul>

        <h3 className="text-(--color-neon-blue) tracking-widest mt-8 mb-4 font-mono">
          PRODUCT ROADMAP (What's Coming Next)
        </h3>
        <ul className="text-(--color-cyber-text-dim) font-mono text-sm space-y-3 mb-6 list-none p-0">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Advanced search using Shodan queries (port, service, country)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>IP
            comparison tool for side-by-side analysis
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Enhanced risk scoring system based on open ports and services
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Historical scan tracking (recent searches / activity log)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Real-time monitoring for selected IPs
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Improved filtering and sorting of ports and services
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-neon-blue inline-block"></span>
            Export reports in multiple formats (JSON / CSV)
          </li>
        </ul>

        <div className="mt-12 pt-6 border-t border-(--color-cyber-border) text-xs text-center opacity-50 font-mono flex flex-col items-center gap-2">
          <ShieldIcon />
          <span>AUTHORIZED PERSONNEL ONLY</span>
        </div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
