import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";

interface DynamicPage {
  slug: string;
  _updatedAt: string;
}

// Fetch all dynamic pages from Sanity
async function getDynamicPages(): Promise<DynamicPage[]> {
  const pages = await client.fetch<DynamicPage[]>(`
    *[_type == "page" && defined(slug.current)] {
      "slug": slug.current,
      _updatedAt
    }
  `);
  return pages;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yogamitbea.de";

  // Fetch dynamic pages from Sanity
  const dynamicPages = await getDynamicPages();

  // Static routes (kept as static pages)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/zum-mitueben`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic routes from Sanity
  const dynamicRoutes: MetadataRoute.Sitemap = dynamicPages.map((page: DynamicPage) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
