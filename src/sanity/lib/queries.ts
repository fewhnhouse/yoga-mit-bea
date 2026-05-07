import { defineQuery } from 'next-sanity'

// Singleton document IDs (must match structure.ts)
export const SINGLETON_IDS = {
  siteSettingsYoga: 'siteSettings-yoga',
  siteSettingsPsychotherapie: 'siteSettings-therapie',
}

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
    tagline,
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
 * Get navigation data - pages and services for a site
 */
export const navigationDataQuery = defineQuery(`
{
  "homepageSlug": *[_id == $siteSettingsId][0].homepage->slug.current,
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
  "pages": *[_type == "page" && site in [$siteId, "both"] && defined(slug.current) && enabled != false] | order(coalesce(order, 100) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    "order": coalesce(order, 100)
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
// SERVICES QUERIES
// ============================================

/**
 * Get all services for a specific site
 */
export const servicesForSiteQuery = defineQuery(`
  *[_type == "service" && site in [$siteId, "both"]] | order(coalesce(order, 100) asc, title asc) {
    _id,
    site,
    title,
    "slug": slug.current,
    subtitle,
    shortDescription,
    "imageUrl": image.asset->url,
    icon,
    features,
    duration,
    pricing,
    ctaText,
    ctaLink,
    order
  }
`)

/**
 * Get a single service by slug
 */
export const serviceBySlugQuery = defineQuery(`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    site,
    title,
    "slug": slug.current,
    subtitle,
    shortDescription,
    fullDescription,
    "imageUrl": image.asset->url,
    icon,
    features,
    duration,
    pricing,
    ctaText,
    ctaLink,
    locations[]-> {
      _id,
      name,
      shortName,
      "slug": slug.current,
      address,
      googleMapsUrl,
      "imageUrl": image.asset->url,
      schedule,
      pricing
    }
  }
`)

// ============================================
// LOCATIONS QUERIES
// ============================================

/**
 * Get all locations for a specific site
 */
export const locationsForSiteQuery = defineQuery(`
  *[_type == "location" && usedBy in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    shortName,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    address,
    googleMapsUrl,
    schedule,
    pricing,
    maxParticipants,
    usedBy,
    order
  }
`)

/**
 * Get a single location by slug
 */
export const locationBySlugQuery = defineQuery(`
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    shortName,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    address,
    googleMapsUrl,
    schedule,
    pricing,
    maxParticipants,
    usedBy
  }
`)

// ============================================
// EVENTS QUERIES
// ============================================

/**
 * Get upcoming events for a specific site
 */
export const upcomingEventsQuery = defineQuery(`
  *[_type == "event" && site in [$siteId, "both"] && startDate >= now()] | order(startDate asc) {
    _id,
    site,
    title,
    "slug": slug.current,
    description,
    "imageUrl": image.asset->url,
    startDate,
    endDate,
    location-> {
      name,
      address
    },
    customLocation,
    price,
    maxParticipants
  }
`)

/**
 * Get a single event by slug
 */
export const eventBySlugQuery = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    site,
    title,
    "slug": slug.current,
    description,
    fullDescription,
    "imageUrl": image.asset->url,
    startDate,
    endDate,
    location-> {
      _id,
      name,
      address,
      googleMapsUrl
    },
    customLocation,
    price,
    maxParticipants
  }
`)

// ============================================
// TESTIMONIALS QUERIES
// ============================================

/**
 * Get featured testimonials for a specific site
 */
export const featuredTestimonialsQuery = defineQuery(`
  *[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
    _id,
    name,
    quote,
    site,
    service-> { title }
  }
`)

/**
 * Get all testimonials for a specific site
 */
export const allTestimonialsQuery = defineQuery(`
  *[_type == "testimonial" && site in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    quote,
    site,
    featured,
    service-> { title }
  }
`)

// ============================================
// PAGES QUERIES
// ============================================

/**
 * Get a page by slug with expanded sections
 */
export const pageBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug && site in [$siteId, "both"] && enabled != false][0] {
    _id,
    site,
    title,
    "slug": slug.current,
    sections[] {
      _key,
      _type,
      ...,
      // Expand image URLs in heroSection
      _type == "heroSection" => {
        ...,
        "imageUrl": image.asset->url
      },
      _type == "imageHeroLogoSection" => {
        ...,
        "imageUrl": image.asset->url,
        "logoUrl": logo.asset->url
      },
      // Expand image URLs in imageTextSection
      _type == "imageTextSection" => {
        ...,
        "imageUrl": image.asset->url
      },
      // Expand service references in cardsGridSection
      _type == "cardsGridSection" => {
        ...,
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
        ...,
        service-> {
          _id,
          title,
          "slug": slug.current,
          subtitle,
          shortDescription,
          fullDescription,
          "imageUrl": image.asset->url,
          icon,
          features,
          duration,
          pricing,
          ctaText,
          ctaLink,
          imagePosition,
          sectionBackground,
          badge,
          locations[]-> {
            _id,
            name,
            shortName,
            description,
            address,
            googleMapsUrl,
            "imageUrl": image.asset->url,
            schedule,
            pricing,
            maxParticipants
          },
          events[]-> {
            _id,
            title,
            description
          }
        }
      }
    },
    seoTitle,
    seoDescription,
    seoKeywords,
    "ogImageUrl": ogImage.asset->url,
    noIndex
  }
`)

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
    sections[] {
      _key,
      _type,
      ...,
      _type == "heroSection" => {
        ...,
        "imageUrl": image.asset->url
      },
      _type == "imageHeroLogoSection" => {
        ...,
        "imageUrl": image.asset->url,
        "logoUrl": logo.asset->url
      },
      _type == "imageTextSection" => {
        ...,
        "imageUrl": image.asset->url
      },
      _type == "cardsGridSection" => {
        ...,
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
        ...,
        service-> {
          _id,
          title,
          "slug": slug.current,
          subtitle,
          shortDescription,
          fullDescription,
          "imageUrl": image.asset->url,
          icon,
          features,
          duration,
          pricing,
          ctaText,
          ctaLink,
          imagePosition,
          sectionBackground,
          badge,
          locations[]-> {
            _id,
            name,
            shortName,
            description,
            address,
            googleMapsUrl,
            "imageUrl": image.asset->url,
            schedule,
            pricing,
            maxParticipants
          },
          events[]-> {
            _id,
            title,
            description
          }
        }
      }
    },
    seoTitle,
    seoDescription,
    seoKeywords,
    "ogImageUrl": ogImage.asset->url,
    noIndex
  },
  "locations": *[_type == "location" && usedBy in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    shortName,
    description,
    address,
    googleMapsUrl,
    "imageUrl": image.asset->url,
    schedule,
    pricing
  },
  "testimonials": *[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
    _id,
    name,
    quote
  }
}
`)

/**
 * Get homepage from site settings reference
 */
export const homepageFromSettingsQuery = defineQuery(`
{
  "settings": *[_id == $siteSettingsId][0] {
    name,
    tagline,
    primaryColor,
    contactEmail,
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
      sections[] {
        _key,
        _type,
        ...,
        _type == "heroSection" => {
          ...,
          "imageUrl": image.asset->url
        },
        _type == "imageHeroLogoSection" => {
          ...,
          "imageUrl": image.asset->url,
          "logoUrl": logo.asset->url
        },
        _type == "imageTextSection" => {
          ...,
          "imageUrl": image.asset->url
        },
        _type == "cardsGridSection" => {
          ...,
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
          ...,
          service-> {
            _id,
            title,
            "slug": slug.current,
            subtitle,
            shortDescription,
            fullDescription,
            "imageUrl": image.asset->url,
            icon,
            features,
            duration,
            pricing,
            ctaText,
            ctaLink,
            imagePosition,
            sectionBackground,
            badge,
            locations[]-> {
              _id,
              name,
              shortName,
              address,
              googleMapsUrl,
              "imageUrl": image.asset->url,
              schedule,
              pricing,
              maxParticipants
            },
            events[]-> {
              _id,
              title,
              description
            }
          }
        }
      }
    }
  },
  "locations": *[_type == "location" && usedBy in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    shortName,
    description,
    address,
    googleMapsUrl,
    "imageUrl": image.asset->url,
    schedule,
    pricing
  },
  "testimonials": *[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
    _id,
    name,
    quote
  }
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
