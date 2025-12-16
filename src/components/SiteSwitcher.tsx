"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/context/SiteContext";

export default function SiteSwitcher() {
  const { siteId } = useSite();
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Only show switcher in development (localhost)
    // In production, each domain shows its own site automatically
    const hostname = window.location.hostname;
    const isDev = hostname === "localhost" || hostname === "127.0.0.1";
    setIsDevMode(isDev);
  }, []);

  // Don't render in production - each domain has its own site
  if (!isDevMode) {
    return null;
  }

  // In dev mode, show current site indicator with links to test both
  const handleSwitch = (site: "yoga" | "therapie") => {
    // Set cookie and reload to simulate domain switch
    document.cookie = `site-id=${site}; path=/; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-1 bg-sand/50 rounded-full p-1">
      <button
        onClick={() => handleSwitch("yoga")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          siteId === "yoga"
            ? "bg-sage text-white shadow-sm"
            : "text-charcoal-light hover:text-sage-dark"
        }`}
        title="Yoga mit Bea (yogamitbea.de)"
      >
        <span className="hidden sm:inline">Yoga</span>
        <span className="sm:hidden">Y</span>
      </button>
      <button
        onClick={() => handleSwitch("therapie")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          siteId === "therapie"
            ? "bg-terracotta text-white shadow-sm"
            : "text-charcoal-light hover:text-terracotta"
        }`}
        title="Therapie mit Bea (therapiemitbea.de)"
      >
        <span className="hidden sm:inline">Therapie</span>
        <span className="sm:hidden">T</span>
      </button>
    </div>
  );
}
