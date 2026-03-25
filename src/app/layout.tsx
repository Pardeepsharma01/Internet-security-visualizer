import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { CyberLoader } from "@/components/ui/CyberLoader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internet Security Visualizer",
  description: "Professional cybersecurity analytics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} antialiased min-h-screen text-sm bg-(--color-cyber-bg) text-(--color-cyber-text)`}
      >
        <CyberLoader />
        {children}
      </body>
    </html>
  );
}

