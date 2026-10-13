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
  LocationsForSiteQueryResult,
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
  | "check"
  | "shell"
  | "sun-moon";

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

import type { PageWithSectionsDataQueryResult } from "./sanity.types";

type PageSection = NonNullable<
  NonNullable<PageWithSectionsDataQueryResult["page"]>["sections"]
>[number];

/** Service type as returned by serviceSection in page queries */
export type ServiceFromQuery = NonNullable<
  Extract<PageSection, { _type: "serviceSection" }>["service"]
>;

/** Location type as returned by serviceSection in page queries */
export type LocationFromQuery = NonNullable<ServiceFromQuery["locations"]>[number];
