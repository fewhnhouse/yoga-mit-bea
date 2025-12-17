import type { PortableTextBlock } from "@portabletext/types";

// ============================================
// BASE TYPES
// ============================================

export type SiteId = "yoga" | "therapie";
export type SiteAffiliation = "yoga" | "therapie" | "both";

// ============================================
// SITE SETTINGS
// ============================================

export interface SiteSettings {
  _id: string;
  siteId: SiteId;
  name: string;
  tagline: string;
  domain: string;
  primaryColor: "sage" | "terracotta";
  logoUrl?: string;
  ogImageUrl?: string;
  seoDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
}

// ============================================
// ABOUT BEA
// ============================================

export interface AboutBeaContent {
  intro?: string;
  philosophyHeading?: string;
  philosophy?: PortableTextBlock[];
  approach?: PortableTextBlock[];
}

export interface CoreValue {
  title: string;
  yogaDescription?: string;
  therapieDescription?: string;
  icon?: "heart" | "clock" | "lotus" | "hands" | "path";
}

export interface AboutBea {
  _id: string;
  name: string;
  photoUrl: string;
  photoAlt?: string;
  yogaContent?: AboutBeaContent;
  therapieContent?: AboutBeaContent;
  coreValues?: CoreValue[];
}

// ============================================
// HOMEPAGE CONTENT
// ============================================

export interface HeroSection {
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface AboutPreview {
  imageUrl?: string;
  paragraph1?: string;
  paragraph2?: string;
}

export interface QuoteSection {
  heading?: string;
  quote?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface ServicesSection {
  heading?: string;
  description?: string;
}

export interface CtaSection {
  heading?: string;
  text?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface HomepageContent {
  _id: string;
  siteId: SiteId;
  heroSection?: HeroSection;
  aboutPreview?: AboutPreview;
  quoteSection?: QuoteSection;
  servicesSection?: ServicesSection;
  ctaSection?: CtaSection;
}

// ============================================
// SERVICES
// ============================================

export type ServiceIcon = 
  | "lotus" 
  | "group" 
  | "calendar" 
  | "path" 
  | "hands" 
  | "wind" 
  | "sound" 
  | "video";

export interface Service {
  _id: string;
  site: SiteAffiliation;
  title: string;
  slug: string;
  subtitle?: string;
  shortDescription?: string;
  fullDescription?: PortableTextBlock[];
  imageUrl?: string;
  icon?: ServiceIcon;
  features?: string[];
  benefits?: string[];
  duration?: string;
  pricing?: string;
  ctaText?: string;
  ctaLink?: string;
  locations?: Location[];
  order?: number;
}

// ============================================
// LOCATIONS
// ============================================

export interface ScheduleSlot {
  day: string;
  times: string;
}

export interface Location {
  _id: string;
  name: string;
  shortName?: string;
  slug?: string;
  description?: string;
  imageUrl?: string;
  address: string;
  googleMapsUrl?: string;
  schedule?: ScheduleSlot[];
  pricing?: string;
  maxParticipants?: number;
  usedBy?: SiteAffiliation;
  order?: number;
}

// ============================================
// EVENTS
// ============================================

export type EventType = 
  | "yogatag" 
  | "yogawochenende" 
  | "workshop" 
  | "retreat" 
  | "special";

export interface Event {
  _id: string;
  site: SiteAffiliation;
  title: string;
  slug?: string;
  eventType?: EventType;
  description?: string;
  fullDescription?: PortableTextBlock[];
  imageUrl?: string;
  startDate?: string;
  endDate?: string;
  location?: Pick<Location, "name" | "address" | "googleMapsUrl">;
  customLocation?: string;
  price?: string;
  maxParticipants?: number;
  registrationOpen?: boolean;
  registrationLink?: string;
  featured?: boolean;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  _id: string;
  site: SiteAffiliation;
  name: string;
  quote: string;
  featured?: boolean;
  service?: Pick<Service, "title">;
}

// ============================================
// PAGES
// ============================================

export interface Page {
  _id: string;
  site: SiteAffiliation;
  title: string;
  slug: string;
  content?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  noIndex?: boolean;
}

// ============================================
// COMBINED PAGE DATA TYPES
// ============================================

export interface HomepageServiceItem {
  _id: string;
  title: string;
  slug?: string;
  shortDescription?: string;
  icon?: string;
  href?: string;
}

export interface HomepageData {
  settings: Pick<SiteSettings, "name" | "tagline" | "primaryColor"> & { contactEmail?: string };
  homepage: HomepageContent | null;
  services: HomepageServiceItem[];
  testimonials: Pick<Testimonial, "_id" | "name" | "quote">[];
  aboutBea?: { name: string; photoUrl?: string };
}

export interface YogaPageData {
  services: Service[];
  locations: Location[];
  upcomingEvents: Pick<Event, "_id" | "title" | "eventType" | "startDate" | "description">[];
}

export interface TherapiePageData {
  services: Service[];
}

export interface AboutPageData {
  about: AboutBea | null;
  services: Pick<Service, "_id" | "title" | "slug" | "icon" | "shortDescription">[];
}

