import { defineQuery } from 'next-sanity'

// Singleton document IDs (must match structure.ts)
export const SINGLETON_IDS = {
  siteSettingsYoga: 'siteSettings-yoga',
  siteSettingsPsychotherapie: 'siteSettings-therapie',
}

// ============================================
// SHARED PROJECTIONS
// ============================================

/** Resolves a `link` object to `{ text, href }`. */
const linkProjection = `{
  text,
  "href": select(
    defined(page) => "/" + page->slug.current,
    defined(route) => "/" + route
  )
}`

const sectionsProjection = `sections[] {
  _key,
  _type,
  ...,
  _type == "imageHeroLogoSection" => {
    "imageUrl": image.asset->url,
    "logoUrl": logo.asset->url,
    image {
      ...,
      "lqip": asset->metadata.lqip,
      "dimensions": asset->metadata.dimensions
    }
  },
  _type == "textSection" => {
    cta ${linkProjection}
  },
  _type == "imageTextSection" => {
    "imageUrl": image.asset->url,
    cta ${linkProjection}
  },
  _type == "ctaSection" => {
    ctas[] {
      _key,
      ...${linkProjection}
    }
  },
  _type == "cardsGridSection" => {
    cards[] {
      ...,
      serviceRef-> {
        _id,
        title,
        shortDescription,
        icon,
        "slug": slug.current,
        "pageSlug": page->slug.current
      }
    }
  },
  _type == "serviceSection" => {
    service-> {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      shortDescription,
      "imageUrl": image.asset->url,
      icon,
      cta ${linkProjection},
      locations[]-> {
        _id,
        name,
        description,
        streetAddress,
        postalCode,
        addressLocality,
        addressRegion,
        addressCountry,
        latitude,
        longitude,
        googleMapsUrl,
        "imageUrl": image.asset->url,
        schedule,
        pricing
      }
    }
  }
}`

const featuredTestimonialsProjection = `*[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
  _id,
  name,
  quote
}`

// ============================================
// SITE SETTINGS QUERIES
// ============================================

/**
 * Get site settings for a specific site (using singleton ID)
 */
export const siteSettingsQuery = defineQuery(`
  *[_id == $siteSettingsId][0] {
    _id,
    siteId,
    name,
    domain,
    primaryColor,
    "logoUrl": logo.asset->url,
    "ogImageUrl": ogImage.asset->url,
    seoDescription,
    contactEmail,
    contactPhone,
    businessLocation {
      schemaOrgType,
      streetAddress,
      addressLocality,
      postalCode,
      addressRegion,
      addressCountry,
      latitude,
      longitude,
      serviceAreaDescription,
      sameAs
    }
  }
`)

/**
 * Get navigation data - header navigation and services for a site
 */
export const navigationDataQuery = defineQuery(`
{
  "headerNavigation": *[_id == $siteSettingsId][0].headerNavigation[] {
    _key,
    "label": coalesce(label, page->title),
    "href": select(
      defined(page->slug.current) => "/" + page->slug.current,
      null
    ),
    "subLinks": coalesce(
      children[defined(page->slug.current)][] {
        _key,
        "label": coalesce(label, page->title),
        "href": "/" + page->slug.current
      },
      []
    )
  },
  "services": *[_type == "service" && site in [$siteId, "both"]] | order(coalesce(order, 100) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    "pageSlug": page->slug.current
  }
}
`)

// ============================================
// SERVICES & LOCATIONS QUERIES
// ============================================

/**
 * Get all services for a specific site
 */
export const servicesForSiteQuery = defineQuery(`
  *[_type == "service" && site in [$siteId, "both"]] | order(coalesce(order, 100) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    "pageSlug": page->slug.current,
    shortDescription,
    "imageUrl": image.asset->url,
    locations[]-> {
      _id,
      name,
      description,
      "imageUrl": image.asset->url,
      streetAddress,
      postalCode,
      addressLocality,
      addressRegion,
      addressCountry,
      latitude,
      longitude,
      googleMapsUrl
    }
  }
`)

/**
 * Get all locations for a specific site
 */
export const locationsForSiteQuery = defineQuery(`
  *[_type == "location" && usedBy in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    description,
    "imageUrl": image.asset->url,
    streetAddress,
    postalCode,
    addressLocality,
    addressRegion,
    addressCountry,
    latitude,
    longitude,
    googleMapsUrl
  }
`)

// ============================================
// PAGES QUERIES
// ============================================

/**
 * Get a page with all related data needed for sections
 */
export const pageWithSectionsDataQuery = defineQuery(`
{
  "page": *[_type == "page" && slug.current == $slug && site in [$siteId, "both"] && enabled != false][0] {
    _id,
    site,
    title,
    "slug": slug.current,
    ${sectionsProjection},
    seoTitle,
    seoDescription,
    seoKeywords,
    "ogImageUrl": ogImage.asset->url,
    noIndex
  },
  "testimonials": ${featuredTestimonialsProjection}
}
`)

/**
 * Get homepage from site settings reference
 */
export const homepageFromSettingsQuery = defineQuery(`
{
  "settings": *[_id == $siteSettingsId][0] {
    name,
    seoDescription,
    "ogImageUrl": ogImage.asset->url,
    homepage-> {
      _id,
      title,
      seoTitle,
      seoDescription,
      seoKeywords,
      "slug": slug.current,
      "ogImageUrl": ogImage.asset->url,
      ${sectionsProjection}
    }
  },
  "testimonials": ${featuredTestimonialsProjection}
}
`)

/**
 * Get all page slugs (for static generation)
 */
export const allPageSlugsQuery = defineQuery(`
  *[_type == "page" && defined(slug.current) && enabled != false] {
    "slug": slug.current,
    site
  }
`)

/** URLs for sitemap — only pages visible on this site */
export const sitemapPagesForSiteQuery = defineQuery(`
  *[_type == "page" && site in [$siteId, "both"] && defined(slug.current) && enabled != false] {
    "slug": slug.current,
    _updatedAt
  }
`)
