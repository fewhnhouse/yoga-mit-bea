import type { SiteId } from "@/sanity/types";

export interface NavSubLink {
  href: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderNavLink {
  label: string;
  href?: string;
  subLinks?: NavSubLink[];
}

export interface SanityNavSubItem {
  _key?: string;
  label?: string | null;
  href?: string | null;
}

export interface SanityNavItem {
  _key?: string;
  label?: string | null;
  href?: string | null;
  subLinks?: SanityNavSubItem[] | null;
}

export interface SanityNavigation {
  homepageSlug?: string | null;
  pages?: { _id: string; title: string; slug: string }[];
  services?: { _id: string; title: string; slug: string; pageSlug?: string | null }[];
  headerNavigation?: SanityNavItem[];
}

export interface ResolvedSiteConfig {
  id: SiteId;
  name: string;
  tagline?: string;
  domain: string;
  primaryColor: "sage" | "terracotta";
  contactEmail?: string;
  contactPhone?: string;
}
