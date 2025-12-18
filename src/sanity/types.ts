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

// ============================================
// EXTRACTED TYPES FROM QUERY RESULTS
// These are the actual shapes returned by queries (with projections)
// ============================================

import type { 
  PageWithSectionsDataQueryResult,
} from "./sanity.types";

/** Service type as returned by page data query */
export type ServiceFromQuery = NonNullable<PageWithSectionsDataQueryResult>["services"][number];

/** Location type as returned by page data query */
export type LocationFromQuery = NonNullable<PageWithSectionsDataQueryResult>["locations"][number];
