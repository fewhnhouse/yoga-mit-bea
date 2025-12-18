import { cookies, headers } from "next/headers";
import type { SiteId } from "@/sanity/types";

/**
 * Get the current site ID on the server side.
 * Reads from the x-site-id header set by the proxy.
 */
export async function getSiteId(): Promise<SiteId> {
  // Try header first (set by proxy)
  const headersList = await headers();
  const headerSiteId = headersList.get("x-site-id");
  if (headerSiteId === "yoga" || headerSiteId === "therapie") {
    return headerSiteId;
  }

  // Fallback to cookie
  const cookieStore = await cookies();
  const cookieSiteId = cookieStore.get("site-id")?.value;
  if (cookieSiteId === "yoga" || cookieSiteId === "therapie") {
    return cookieSiteId;
  }

  // Default to yoga
  return "yoga";
}

/**
 * Get singleton IDs based on the site
 */
export function getSingletonIds(siteId: SiteId) {
  return {
    siteSettingsId: siteId === "yoga" ? "siteSettings-yoga" : "siteSettings-therapie",
  };
}

