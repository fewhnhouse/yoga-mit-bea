"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/context/SiteContext";

export default function SiteSwitcher() {
  const { siteId } = useSite();
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Show switcher in development (localhost) and on Vercel preview URLs
    // Hide on production domains (yoga-mit-bea.de, therapie-mit-bea.de)
    const hostname = window.location.hostname;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isVercelPreview = hostname.includes("vercel.app");
    setIsDevMode(isLocalhost || isVercelPreview);
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
    <div className="flex items-center gap-1 bg-sand/50 rounded-full p-0.5">
      <button
        onClick={() => handleSwitch("yoga")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
