"use client";

import { useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/ui/SearchBar";
import { ServerInfoCard } from "@/components/ui/ServerInfoCard";
import { PortsChart } from "@/components/charts/PortsChart";
import { ServicesTable } from "@/components/charts/ServicesTable";
import { LocationMap } from "@/components/charts/LocationMap";
import { SecurityInfo } from "@/components/ui/SecurityInfo";
import { WebTechInfo } from "@/components/ui/WebTechInfo";
import { LoadingState } from "@/components/ui/LoadingState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Download } from "lucide-react";
import useSWR from "swr";
import { Suspense } from "react";
import { motion } from "framer-motion";
import type { jsPDF as JsPDFType } from "jspdf";

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    return res.json().then(data => { throw new Error(data.error || 'Failed to fetch') });
  }
  return res.json();
});

// ── Skeleton components ─────────────────────────────────────────────────────

function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-(--color-cyber-surface) border border-(--color-cyber-border) rounded-xl overflow-hidden ${className}`}>
      <div className="h-14 bg-zinc-800/60 border-b border-(--color-cyber-border)" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-zinc-800 rounded w-3/4" />
        <div className="h-4 bg-zinc-800 rounded w-1/2" />
        <div className="h-4 bg-zinc-800 rounded w-5/6" />
        <div className="h-4 bg-zinc-800 rounded w-2/3" />
        <div className="h-4 bg-zinc-800 rounded w-3/5" />
      </div>
    </div>
  );
}

function SkeletonTable({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-(--color-cyber-surface) border border-(--color-cyber-border) rounded-xl overflow-hidden ${className}`}>
      <div className="h-14 bg-zinc-800/60 border-b border-(--color-cyber-border)" />
      <div className="p-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4 px-6 py-4 border-b border-(--color-cyber-border)">
            <div className="h-4 bg-zinc-800 rounded w-16" />
            <div className="h-4 bg-zinc-800 rounded w-20" />
            <div className="h-4 bg-zinc-800 rounded flex-1" />
            <div className="h-4 bg-zinc-800 rounded w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-8 space-y-6"
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SkeletonCard className="lg:col-span-2 min-h-87.5" />
        <SkeletonCard className="lg:col-span-1 min-h-87.5" />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SkeletonCard className="lg:col-span-1 min-h-75" />
        <SkeletonTable className="lg:col-span-2 min-h-75" />
      </div>
      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkeletonCard className="min-h-87.5" />
        <SkeletonCard className="min-h-87.5" />
      </div>
    </motion.div>
  );
}

// ── Export helper (PDF) ──────────────────────────────────────────────────────

// Helper: paint the dark background + cyan accent bar on the current page
function paintPageBackground(
  doc: JsPDFType,
  pageW: number,
  pageH: number,
  colBg: string,
  colHeader: string
) {
  doc.setFillColor(colBg);
  doc.rect(0, 0, pageW, pageH, "F");
  doc.setFillColor(colHeader);
  doc.rect(0, 0, pageW, 2, "F");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function exportReportPDF(data: any) {
  const { jsPDF } = await import("jspdf");
  const { default: autoTable } = await import("jspdf-autotable");

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // ── Colours ──────────────────────────────────────────────────────────────
  const COL_BG     = "#0a0a0f";
  const COL_HEADER = "#00f0ff";
  const COL_TEXT   = "#e0e0e0";
  const COL_DIM    = "#6b7280";

  // ── Intercept addPage so EVERY new page (not just autoTable pages) gets
  //    the dark background painted automatically ────────────────────────────
  const originalAddPage = doc.addPage.bind(doc);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (doc as any).addPage = (...args: Parameters<typeof doc.addPage>) => {
    originalAddPage(...args);
    paintPageBackground(doc, pageW, pageH, COL_BG, COL_HEADER);
    return doc;
  };

  // ── Page 1: Dark background + accent bar ─────────────────────────────────
  paintPageBackground(doc, pageW, pageH, COL_BG, COL_HEADER);

  // ── Title ─────────────────────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(COL_HEADER);
  doc.text("INTERNET SECURITY VISUALIZER", 14, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(COL_DIM);
  doc.text("SCAN REPORT  ·  " + new Date().toLocaleString('en-IN'), 14, 25);

  // divider
  doc.setDrawColor(COL_HEADER);
  doc.setLineWidth(0.3);
  doc.line(14, 28, pageW - 14, 28);

  let y = 36;
  const BOTTOM_MARGIN = pageH - 15; // leave 15 mm at the bottom

  /** Add a new page and reset y to a safe starting position */
  const newPage = () => {
    doc.addPage(); // background is auto-painted by the patched addPage
    y = 14;
  };

  /** Ensure there is enough vertical space; if not, start a new page */
  const ensureSpace = (needed: number) => {
    if (y + needed > BOTTOM_MARGIN) newPage();
  };

  const sectionTitle = (title: string) => {
    ensureSpace(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(COL_HEADER);
    doc.text(`[ ${title} ]`, 14, y);
    y += 6;
  };

  const row = (label: string, value: string) => {
    ensureSpace(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(COL_DIM);
    doc.text(label + ":", 18, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(COL_TEXT);
    doc.text(String(value ?? "N/A"), 60, y);
    y += 6;
  };

  // ── Section 1: Host & Network ─────────────────────────────────────────────
  sectionTitle("HOST & NETWORK IDENTIFICATION");
  row("IP Address",    data.ip_str ?? "N/A");
  row("Organization",  data.org ?? "N/A");
  row("ISP",           data.isp ?? "N/A");
  row("ASN",           data.asn ?? "N/A");
  row("Operating Sys", data.os ?? "N/A");
  row("Hostnames",     (data.hostnames ?? []).join(", ") || "N/A");
  y += 2;

  // ── Section 2: Geolocation ────────────────────────────────────────────────
  sectionTitle("GEOLOCATION DETAILS");
  row("Country",      (data.country_name ?? "N/A") + (data.country_code ? ` (${data.country_code})` : ""));
  row("City",          data.city ?? "N/A");
  row("Region",        data.region_code ?? "N/A");
  row("Postal Code",   data.postal_code ?? "N/A");
  row("Latitude",      data.latitude?.toString() ?? "N/A");
  row("Longitude",     data.longitude?.toString() ?? "N/A");
  y += 2;

  // ── Section 3: Security ───────────────────────────────────────────────────
  sectionTitle("SECURITY & VULNERABILITIES");
  const vulns = data.vulns ? Object.keys(data.vulns) : [];
  row("CVEs Found",  vulns.length > 0 ? String(vulns.length) : "None");
  if (vulns.length) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor("#ff4444");
    const cveText = vulns.join("  ·  ");
    const lines = doc.splitTextToSize(cveText, pageW - 32);
    lines.forEach((l: string) => { ensureSpace(6); doc.text(l, 18, y); y += 5; });
  }
  row("Tags", (data.tags ?? []).join(", ") || "None");
  y += 2;

  // ── Section 4: Open Ports ─────────────────────────────────────────────────
  sectionTitle("OPEN PORTS");
  doc.setFont("courier", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(COL_HEADER);
  const ports: string[] = (data.ports ?? []).map(String);
  const portLine = ports.join("   ");
  const portLines = doc.splitTextToSize(portLine, pageW - 32);
  portLines.forEach((l: string) => { ensureSpace(6); doc.text(l, 18, y); y += 5; });
  y += 4;

  // ── Section 5: Services Table ─────────────────────────────────────────────
  sectionTitle("SERVICE MAPPING");
  y += 2;

  const services: {
    port?: number; transport?: string; product?: string; version?: string; cpe?: string[];
  }[] = data.data ?? [];

  autoTable(doc, {
    startY: y,
    margin: { left: 14, right: 14 },
    head: [["Port", "Protocol", "Product", "Version", "CPE"]],
    body: services.map((s) => [
      s.port ?? "N/A",
      (s.transport ?? "N/A").toUpperCase(),
      s.product ?? "N/A",
      s.version ?? "N/A",
      s.cpe?.[0] ?? "N/A",
    ]),
    theme: "grid",
    styles: {
      font: "courier",
      fontSize: 7.5,
      textColor: [220, 220, 220],
      fillColor: [15, 15, 22],
      lineColor: [40, 40, 60],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [0, 30, 40],
      textColor: [0, 240, 255],
      fontStyle: "bold",
      fontSize: 8,
    },
    alternateRowStyles: { fillColor: [20, 20, 35] },

    // autoTable's own didAddPage fires AFTER our patched addPage, so the
    // background is already painted. We just need to nudge the top margin.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);

  // ── Footer on last page ───────────────────────────────────────────────────
  const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable?.finalY + 8 || pageH - 20;
  doc.setFontSize(7);
  doc.setTextColor(COL_DIM);
  doc.text("Generated by Internet Security Visualizer  ·  Powered by Pardeep Sharma", 14, Math.min(finalY, pageH - 10));

  doc.save("scan-report.pdf");
}

// ── Main content ─────────────────────────────────────────────────────────────

function AnalyzerContent() {
  const searchParams = useSearchParams();
  const ip = searchParams.get("ip");

  const { data, error, isLoading } = useSWR(
    ip ? `/api/shodan?ip=${encodeURIComponent(ip)}` : null,
    fetcher
  );

  if (!ip) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8"
      >
        <ErrorState title="NO_TARGET_SPECIFIED" message="Please enter an IP address to analyze above." />
      </motion.div>
    );
  }

  if (isLoading) {
    return <SkeletonSkeleton />;
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8"
      >
        <ErrorState title="RECON_FAILED" message={error.message || "Failed to fetch data from remote server."} />
      </motion.div>
    );
  }

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 space-y-6"
    >
      {/* Results header with Export button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-(--color-cyber-text-dim)">
          <span className="w-1.5 h-1.5 rounded-full bg-(--color-neon-green) animate-pulse shadow-[0_0_6px_var(--color-neon-green)]"></span>
          SCAN COMPLETE — TARGET: <span className="text-(--color-neon-blue)">{ip}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,240,255,0.3)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => exportReportPDF(data)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.25)] text-(--color-neon-blue) rounded-lg hover:bg-[rgba(0,240,255,0.15)] transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Export Report (PDF)
        </motion.button>
      </motion.div>

      {/* Overview & Location */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <ServerInfoCard data={data} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <LocationMap
            lat={data.latitude}
            lng={data.longitude}
            city={data.city}
            country={data.country_name}
            region={data.region_code}
            postal={data.postal_code}
            country_code={data.country_code}
          />
        </motion.div>
      </div>

      {/* Ports & Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <PortsChart ports={data.ports || []} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 overflow-x-auto"
        >
          <ServicesTable services={data.data || []} />
        </motion.div>
      </div>

      {/* Security & Web Tech */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="min-h-87.5"
        >
          <SecurityInfo vulns={data.vulns} tags={data.tags} ssl={data.ssl} />
        </motion.div>

        {data.http ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="min-h-87.5"
          >
            <WebTechInfo http={data.http} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-(--color-cyber-surface) backdrop-blur-xl border border-(--color-cyber-border) rounded-xl flex items-center justify-center p-8 min-h-87.5"
          >
            <div className="text-center opacity-50">
              <span className="text-4xl block mb-2">🌐</span>
              <p className="font-mono text-xs tracking-widest text-(--color-cyber-text-dim) uppercase">No Web Technology Stack Detected</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function IPAnalyzerPage() {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 pb-6 border-b border-(--color-cyber-border) relative"
      >
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-linear-to-r from-(--color-neon-blue) to-transparent"></div>
        <h1 className="text-xl md:text-3xl font-mono tracking-widest text-transparent bg-clip-text bg-linear-to-r from-white to-(--color-neon-blue) mb-2 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] font-black">
          <span className="w-4 h-4 rounded-sm bg-(--color-neon-blue) block shadow-[0_0_15px_var(--color-neon-blue)] animate-pulse"></span>
          NODE_ANALYZER_UI
        </h1>
        <p className="text-(--color-cyber-text-dim) font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
          <span className="text-(--color-neon-blue)">❯</span> Intelligence gathering module initialized
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full relative z-20"
      >
        <SearchBar />
      </motion.div>

      <div className="flex-1 pb-10">
        <Suspense fallback={<LoadingState message="INITIALIZING..." />}>
          <AnalyzerContent />
        </Suspense>
      </div>
    </div>
  );
}
