export type SiteId = "yoga" | "therapie";

export interface NavLink {
  href: string;
  label: string;
}

export interface SiteConfig {
  id: SiteId;
  name: string;
  tagline: string;
  domain: string;
  primaryColor: string;
  // Static info links for footer (Impressum, Datenschutz, etc.)
  footerInfoLinks: NavLink[];
}

// Navigation data from Sanity (pages and services)
export interface SanityNavigation {
  homepageSlug?: string | null;
  pages?: { _id: string; title: string; slug: string }[];
  services?: { _id: string; title: string; slug: string }[];
}

export const sites: Record<SiteId, SiteConfig> = {
  yoga: {
    id: "yoga",
    name: "Yoga mit Bea",
    tagline: "Durch Yoga gehst du nur auf dich selbst zu",
    domain: "yogamitbea.de",
    primaryColor: "sage",
    footerInfoLinks: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
  therapie: {
    id: "therapie",
    name: "Therapie mit Bea",
    tagline: "Heilung für Körper und Seele",
    domain: "therapiemitbea.de",
    primaryColor: "terracotta",
    footerInfoLinks: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
};

export const defaultSite: SiteId = "yoga";

export function getSiteFromDomain(hostname: string): SiteId {
  if (hostname.includes("therapie")) return "therapie";
  return "yoga";
}
