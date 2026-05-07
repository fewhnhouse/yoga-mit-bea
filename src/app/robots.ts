import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getCanonicalOriginFromHeaders } from "@/lib/siteFromHost";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const baseUrl = getCanonicalOriginFromHeaders(headersList);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
