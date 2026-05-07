import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { client } from "@/sanity/client";
import { getCanonicalOriginFromHeaders } from "@/lib/siteFromHost";
import { getSiteId } from "@/lib/getSiteId";
import { sitemapPagesForSiteQuery } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

interface DynamicPage {
  slug: string;
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const baseUrl = getCanonicalOriginFromHeaders(headersList);
  const siteId = await getSiteId();

  const dynamicPages = await client.fetch<DynamicPage[]>(
    sitemapPagesForSiteQuery,
    { siteId },
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...(siteId === "yoga"
      ? [
          {
            url: `${baseUrl}/zum-mitueben`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
          },
        ]
      : []),
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = dynamicPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
