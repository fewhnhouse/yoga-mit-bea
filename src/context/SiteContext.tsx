"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  SiteId,
  SiteConfig,
  sites,
  defaultSite,
} from "@/config/sites";

interface SiteContextType {
  currentSite: SiteConfig;
  siteId: SiteId;
  isYoga: boolean;
  isTherapie: boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

// Helper to get site from cookie
function getSiteFromCookie(): SiteId {
  if (typeof document === "undefined") return defaultSite;
  
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "site-id" && (value === "yoga" || value === "therapie")) {
      return value as SiteId;
    }
  }
  return defaultSite;
}

// Helper to detect site from hostname (fallback for initial load)
function getSiteFromHostname(): SiteId {
  if (typeof window === "undefined") return defaultSite;
  
  const hostname = window.location.hostname;
  if (hostname.includes("therapie")) {
    return "therapie";
  }
  return "yoga";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [siteId, setSiteId] = useState<SiteId>(defaultSite);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // First check cookie (set by middleware), then fallback to hostname detection
    const cookieSite = getSiteFromCookie();
    const hostnameSite = getSiteFromHostname();
    
    // Prefer cookie as it's set by middleware, but use hostname as fallback
    const detectedSite = cookieSite !== defaultSite ? cookieSite : hostnameSite;
    
    setSiteId(detectedSite);
    setIsHydrated(true);
  }, []);

  const value: SiteContextType = {
    currentSite: sites[siteId],
    siteId,
    isYoga: siteId === "yoga",
    isTherapie: siteId === "therapie",
  };

  // Prevent hydration mismatch by rendering with default until hydrated
  // This ensures server and client render the same initially
  if (!isHydrated) {
    return (
      <SiteContext.Provider value={{
        currentSite: sites[defaultSite],
        siteId: defaultSite,
        isYoga: defaultSite === "yoga",
        isTherapie: defaultSite === "therapie",
      }}>
        {children}
      </SiteContext.Provider>
    );
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
}
