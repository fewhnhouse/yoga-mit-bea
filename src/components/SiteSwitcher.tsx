"use client";

import { useSite } from "@/context/SiteContext";

type EnvironmentMode = "dev" | "production";

function getEnvironmentMode(): EnvironmentMode {
  if (typeof window === "undefined") return "production"; // SSR fallback
  const hostname = window.location.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
  const isVercelPreview = hostname.includes("vercel.app");
  return (isLocalhost || isVercelPreview) ? "dev" : "production";
}

export default function SiteSwitcher() {
  const { siteId } = useSite();
  const envMode = getEnvironmentMode();

  // Handle site switching with smart page mapping
  const handleSwitch = (site: "yoga" | "therapie") => {
    const currentPath = window.location.pathname;
    
    // Map site-specific pages to their counterpart
    let newPath = currentPath;
    if (site === "yoga" && currentPath === "/therapie") {
      newPath = "/yoga";
    } else if (site === "therapie" && currentPath === "/yoga") {
      newPath = "/therapie";
    }

    if (envMode === "production") {
      // Production: Navigate to the other domain
      const targetDomain = site === "yoga" ? "yogamitbea.de" : "therapiemitbea.de";
      window.location.href = `https://${targetDomain}${newPath}`;
    } else {
      // Dev/preview: Use cookie-based switching
      document.cookie = `site-id=${site}; path=/; SameSite=Lax`;
      
      if (newPath !== currentPath) {
        window.location.href = newPath;
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className="flex items-center gap-1 bg-sand/50 rounded-full p-0.5">
      <button
        type="button"
        onClick={() => handleSwitch("yoga")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          siteId === "yoga"
            ? "bg-sage text-white shadow-sm"
            : "text-charcoal-light hover:text-sage-dark"
        }`}
        title="Yoga mit Bea (yogamitbea.de)"
      >
        Yoga
      </button>
      <button
        type="button"
        onClick={() => handleSwitch("therapie")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          siteId === "therapie"
            ? "bg-terracotta text-white shadow-sm"
            : "text-charcoal-light hover:text-terracotta"
        }`}
        title="Therapie mit Bea (therapiemitbea.de)"
      >
        Therapie
      </button>
    </div>
  );
}
