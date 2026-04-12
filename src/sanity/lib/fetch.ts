import { client } from "../client";
import type { SiteId } from "../types";

/**
 * Wrapper around Sanity client fetch with better typing
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { cache?: RequestCache; next?: NextFetchRequestConfig } = {}
): Promise<T> {
  const { cache = "force-cache", next } = options;
  
  return client.fetch<T>(query, params, {
    cache,
    next,
  });
}

/**
 * Fetch with site context
 */
export async function sanityFetchForSite<T>(
  query: string,
  siteId: SiteId,
  additionalParams: Record<string, unknown> = {},
  options: { cache?: RequestCache; next?: NextFetchRequestConfig } = {}
): Promise<T> {
  return sanityFetch<T>(query, { siteId, ...additionalParams }, options);
}

/**
 * Fetch with revalidation (for dynamic data)
 */
export async function sanityFetchWithRevalidate<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidateSeconds = 60
): Promise<T> {
  return sanityFetch<T>(query, params, {
    next: { revalidate: revalidateSeconds },
  });
}

/**
 * Fetch with no caching (for frequently changing data)
 */
export async function sanityFetchNoCache<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return sanityFetch<T>(query, params, {
    cache: "no-store",
  });
}

