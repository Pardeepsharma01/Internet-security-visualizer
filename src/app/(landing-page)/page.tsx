"use client";

import CyberBackground from "@/components/landing-page/ui/CyberBackground";
import Navbar from "@/components/landing-page/layout/Navbar";
import HeroSection from "@/components/landing-page/sections/HeroSection";
import FeaturesSection from "@/components/landing-page/sections/FeaturesSection";
import HowItWorksSection from "@/components/landing-page/sections/HowItWorksSection";
import DashboardPreviewSection from "@/components/landing-page/sections/DashboardPreviewSection";
import CTASection from "@/components/landing-page/sections/CTASection";
import Footer from "@/components/landing-page/layout/Footer";
import WhoIsThisFor from "@/components/landing-page/sections/WhoIsThisFor";
import UseCases from "@/components/landing-page/sections/UseCases";
import WhyISV from "@/components/landing-page/sections/WhyISV";
import PublicIPInfo from "@/components/landing-page/sections/PublicIPInfo";

export default function InternetSecurityVisualizerLanding() {
  return (
    <div
      className="relative w-full"
      style={{ background: "#0B0F19", color: "white" }}
    >
      {/* Fixed Background - Behind Everything */}
      <CyberBackground />

      {/* Fixed Navbar - Always on Top */}
      <Navbar />

      {/* Scrollable Content - On Top of Background */}
      <div className="relative z-10 pt-20">
        <HeroSection />
        <FeaturesSection />
        <PublicIPInfo />
        <WhoIsThisFor />
        <HowItWorksSection />
        <UseCases />
        <DashboardPreviewSection />
        <WhyISV />
        <CTASection />
        <Footer />
      </div>
    </div>
   
  );
}