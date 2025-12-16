export type SiteId = "yoga" | "therapie";

export interface SiteConfig {
  id: SiteId;
  name: string;
  tagline: string;
  domain: string;
  primaryColor: string;
  navLinks: { href: string; label: string }[];
  footerLinks: {
    services: { href: string; label: string }[];
    info: { href: string; label: string }[];
  };
}

export const sites: Record<SiteId, SiteConfig> = {
  yoga: {
    id: "yoga",
    name: "Yoga mit Bea",
    tagline: "Durch Yoga gehst du nur auf dich selbst zu",
    domain: "yogamitbea.de",
    primaryColor: "sage",
    navLinks: [
      { href: "/", label: "Übersicht" },
      { href: "/ueber-mich", label: "Bea" },
      { href: "/yoga", label: "Yoga" },
      { href: "/zum-mitueben", label: "Zum Mitüben" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    footerLinks: {
      services: [
        { href: "/yoga#individuell", label: "Yoga Individuell" },
        { href: "/yoga#kurse", label: "Yogakurse" },
        { href: "/yoga#aktuell", label: "Yoga aktuell" },
        { href: "/yoga#weg", label: "Yoga Weg" },
        { href: "/zum-mitueben", label: "Yoga Online" },
      ],
      info: [
        { href: "/ueber-mich", label: "Über Bea" },
        { href: "/kontakt", label: "Kontakt" },
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ],
    },
  },
  therapie: {
    id: "therapie",
    name: "Therapie mit Bea",
    tagline: "Heilung für Körper und Seele",
    domain: "therapiemitbea.de",
    primaryColor: "terracotta",
    navLinks: [
      { href: "/", label: "Übersicht" },
      { href: "/ueber-mich", label: "Bea" },
      { href: "/therapie", label: "Therapie" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    footerLinks: {
      services: [
        { href: "/therapie#massage", label: "Therapeutische Massage" },
        { href: "/therapie#atemtherapie", label: "Atemtherapie" },
        { href: "/therapie#klangschalen", label: "Klangschalentherapie" },
        { href: "/therapie#einzelsitzung", label: "Einzelsitzungen" },
      ],
      info: [
        { href: "/ueber-mich", label: "Über Bea" },
        { href: "/kontakt", label: "Kontakt" },
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ],
    },
  },
};

export const defaultSite: SiteId = "yoga";

export function getSiteFromDomain(hostname: string): SiteId {
  if (hostname.includes("therapie")) return "therapie";
  return "yoga";
}

