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
  AboutBea,
  HomepageContent,
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
  // Combined page data queries
  HomepageDataQueryResult,
  YogaPageDataQueryResult,
  TherapiePageDataQueryResult,
  AboutPageDataQueryResult,
  // Individual queries
  SiteSettingsQueryResult,
  AboutBeaQueryResult,
  HomepageContentQueryResult,
  ServicesForSiteQueryResult,
  ServiceBySlugQueryResult,
  LocationsForSiteQueryResult,
  LocationBySlugQueryResult,
  UpcomingEventsQueryResult,
  EventBySlugQueryResult,
  FeaturedTestimonialsQueryResult,
  AllTestimonialsQueryResult,
  PageBySlugQueryResult,
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
  | "video";

// Core value icon type (used in components for icon rendering)
export type CoreValueIcon = "heart" | "clock" | "lotus" | "hands" | "path";

// ============================================
// EXTRACTED TYPES FROM QUERY RESULTS
// These are the actual shapes returned by queries (with projections)
// ============================================

import type { 
  YogaPageDataQueryResult, 
  TherapiePageDataQueryResult,
  AboutPageDataQueryResult,
} from "./sanity.types";

/** Service type as returned by yoga page query (with projections like imageUrl, locations, events) */
export type YogaServiceFromQuery = NonNullable<YogaPageDataQueryResult>["services"][number];

/** Service type as returned by therapie page query (with projections like imageUrl) */
export type TherapieServiceFromQuery = NonNullable<TherapiePageDataQueryResult>["services"][number];

/** Union of service types from both pages - for ServiceSection component */
export type ServiceFromQuery = YogaServiceFromQuery | TherapieServiceFromQuery;

/** Location type as returned by yoga page query (with projections like imageUrl) */
export type LocationFromQuery = NonNullable<YogaPageDataQueryResult>["locations"][number];

/** Core value type from about page query */
export type CoreValueFromQuery = NonNullable<NonNullable<AboutPageDataQueryResult>["about"]>["coreValues"];
