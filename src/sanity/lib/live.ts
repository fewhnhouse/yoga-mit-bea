import { defineLive } from "next-sanity/live";
import { client } from "../client";

// Token for reading draft content (set in environment variables)
const token = process.env.SANITY_VIEWER_TOKEN;

/**
 * defineLive provides:
 * - sanityFetch: A fetch function with built-in caching and revalidation
 * - SanityLive: A component that enables real-time live preview in the browser
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});

