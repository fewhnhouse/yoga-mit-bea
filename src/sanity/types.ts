/**
 * Sanity Types - Combines generated types with custom helpers.
 * 
 * Run `pnpm sanity schema extract --enforce-required-fields && pnpm sanity typegen generate` 
 * to regenerate types from schema and queries.
 */

// ============================================
// RE-EXPORT GENERATED SCHEMA TYPES
// ============================================

export type {
  SiteSettings,
  Service,
  Location,
  Event,
  Testimonial,
  Page,
  Slug,
} from "./sanity.types";

// ============================================
// RE-EXPORT GENERATED QUERY RESULT TYPES
// ============================================

export type {
  SiteSettingsQueryResult,
  ServicesForSiteQueryResult,
  ServiceBySlugQueryResult,
  LocationsForSiteQueryResult,
  LocationBySlugQueryResult,
  UpcomingEventsQueryResult,
  EventBySlugQueryResult,
  FeaturedTestimonialsQueryResult,
  AllTestimonialsQueryResult,
  PageBySlugQueryResult,
  PageWithSectionsDataQueryResult,
  HomepageFromSettingsQueryResult,
  AllPageSlugsQueryResult,
} from "./sanity.types";

// ============================================
// CUSTOM HELPER TYPES
// ============================================

export type SiteId = "yoga" | "therapie";
export type SiteAffiliation = "yoga" | "therapie" | "both";

// Service icon type (used in components)
export type ServiceIconType = 
  | "lotus" 
  | "group" 
  | "calendar" 
  | "path" 
  | "hands" 
  | "wind" 
  | "sound" 
  | "video"
  | "heart"
  | "clock"
  | "check";

// Core value icon type (used in components for icon rendering)
export type CoreValueIcon = "heart" | "clock" | "lotus" | "hands" | "path";

export type PricingEntry = {
  _key?: string;
  title?: string | null;
  description?: string | null;
};

// ============================================
// EXTRACTED TYPES FROM QUERY RESULTS
// These are the actual shapes returned by queries (with projections)
// ============================================

import type {
  PageWithSectionsDataQueryResult,
} from "./sanity.types";

/** Service type as returned by serviceSection in page queries */
export type ServiceFromQuery = {
  _id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  shortDescription: string | null;
  fullDescription: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  imageUrl: string | null;
  icon: ServiceIconType | null;
  features: Array<string> | null;
  duration: string | null;
  pricing: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  imagePosition: "left" | "right" | null;
  sectionBackground: "light" | "cream" | null;
  badge: string | null;
  locations: Array<{
    _id: string;
    name: string;
    shortName: string | null;
    description: string | null;
    address: string;
    googleMapsUrl: string | null;
    imageUrl: string | null;
    schedule: Array<{
      day?: string;
      times?: string;
      _key: string;
    }> | null;
    pricing: PricingEntry[] | string | null;
    maxParticipants: number | null;
  }> | null;
  events: Array<{
    _id: string;
    title: string | null;
    description: string | null;
  }> | null;
};

/** Location type as returned by page data query */
export type LocationFromQuery = NonNullable<PageWithSectionsDataQueryResult>["locations"][number];
