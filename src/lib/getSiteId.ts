import { cookies, headers } from "next/headers";
import type { SiteId } from "@/sanity/types";
import { getSiteIdFromHostname } from "@/lib/siteFromHost";

/**
 * Get the current site ID on the server side.
 * Reads from the x-site-id header set by the proxy.
 */
export async function getSiteId(): Promise<SiteId> {
  const headersList = await headers();
  // Try header first (set by proxy)
  const headerSiteId = headersList.get("x-site-id");
  if (headerSiteId === "yoga" || headerSiteId === "therapie") {
    return headerSiteId;
  }

  // Routes like /sitemap.xml may skip the proxy matcher — resolve site from host
  const cookieStore = await cookies();
  const cookieSiteId = cookieStore.get("site-id")?.value;

  const forwardedHost = headersList.get("x-forwarded-host");
  const host =
    forwardedHost?.split(",")[0]?.trim() || headersList.get("host") || "";

  const isDevHost =
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    host.includes("vercel.app");

  if (
    isDevHost &&
    (cookieSiteId === "yoga" || cookieSiteId === "therapie")
  ) {
    return cookieSiteId;
  }

  if (host) {
    return getSiteIdFromHostname(host);
  }

  if (cookieSiteId === "yoga" || cookieSiteId === "therapie") {
    return cookieSiteId;
  }

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

