import type { SiteId } from "@/sanity/types";

export interface NavLink {
  href: string;
  label: string;
}

export interface SanityNavigation {
  homepageSlug?: string | null;
  pages?: { _id: string; title: string; slug: string }[];
  services?: { _id: string; title: string; slug: string }[];
}

export interface ResolvedSiteConfig {
  id: SiteId;
  name: string;
  tagline?: string;
  domain: string;
  primaryColor: "sage" | "terracotta";
}
