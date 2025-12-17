import { groq } from "next-sanity";

// Singleton document IDs (must match structure.ts)
export const SINGLETON_IDS = {
  siteSettingsYoga: "siteSettings-yoga",
  siteSettingsTherapie: "siteSettings-therapie",
  aboutBea: "aboutBea",
  homepageYoga: "homepage-yoga",
  homepageTherapie: "homepage-therapie",
};

// ============================================
// SITE SETTINGS QUERIES
// ============================================

/**
 * Get site settings for a specific site (using singleton ID)
 */
export const siteSettingsQuery = groq`
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
    contactPhone
  }
`;

// ============================================
// ABOUT BEA QUERIES
// ============================================

/**
 * Get the About Bea content (singleton)
 */
export const aboutBeaQuery = groq`
  *[_id == "aboutBea"][0] {
    _id,
    name,
    "photoUrl": photo.asset->url,
    photoAlt,
    yogaContent,
    therapieContent,
    coreValues
  }
`;

// ============================================
// HOMEPAGE QUERIES
// ============================================

/**
 * Get homepage content for a specific site (using singleton ID)
 */
export const homepageContentQuery = groq`
  *[_id == $homepageId][0] {
    _id,
    siteId,
    heroSection,
    aboutPreview {
      "imageUrl": image.asset->url,
      paragraph1,
      paragraph2
    },
    quoteSection,
    servicesSection,
    ctaSection
  }
`;

// ============================================
// SERVICES QUERIES
// ============================================

/**
 * Get all services for a specific site
 */
export const servicesForSiteQuery = groq`
  *[_type == "service" && site in [$siteId, "both"]] | order(order asc) {
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
`;

/**
 * Get a single service by slug
 */
export const serviceBySlugQuery = groq`
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
`;

// ============================================
// LOCATIONS QUERIES
// ============================================

/**
 * Get all locations for a specific site
 */
export const locationsForSiteQuery = groq`
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
`;

/**
 * Get a single location by slug
 */
export const locationBySlugQuery = groq`
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
`;

// ============================================
// EVENTS QUERIES
// ============================================

/**
 * Get upcoming events for a specific site
 */
export const upcomingEventsQuery = groq`
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
`;

/**
 * Get a single event by slug
 */
export const eventBySlugQuery = groq`
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
`;

// ============================================
// TESTIMONIALS QUERIES
// ============================================

/**
 * Get featured testimonials for a specific site
 */
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
    _id,
    name,
    quote,
    site,
    service-> { title }
  }
`;

/**
 * Get all testimonials for a specific site
 */
export const allTestimonialsQuery = groq`
  *[_type == "testimonial" && site in [$siteId, "both"]] | order(order asc) {
    _id,
    name,
    quote,
    site,
    featured,
    service-> { title }
  }
`;

// ============================================
// PAGES QUERIES
// ============================================

/**
 * Get a page by slug
 */
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug && site in [$siteId, "both"]][0] {
    _id,
    site,
    title,
    "slug": slug.current,
    content,
    seoTitle,
    seoDescription,
    "ogImageUrl": ogImage.asset->url,
    noIndex
  }
`;

/**
 * Get all page slugs (for static generation)
 */
export const allPageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current,
    site
  }
`;

// ============================================
// COMBINED QUERIES FOR PAGE DATA
// ============================================

/**
 * Get all data needed for the homepage
 */
export const homepageDataQuery = groq`
{
  "settings": *[_id == $siteSettingsId][0] {
    name,
    tagline,
    primaryColor,
    contactEmail
  },
  "homepage": *[_id == $homepageId][0] {
    heroSection,
    aboutPreview {
      "imageUrl": image.asset->url,
      paragraph1,
      paragraph2
    },
    quoteSection,
    servicesSection,
    ctaSection
  },
  "services": *[_type == "service" && site in [$siteId, "both"]] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    icon,
    "href": "/" + $siteId + "#" + slug.current
  },
  "testimonials": *[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
    _id,
    name,
    quote
  },
  "aboutBea": *[_id == "aboutBea"][0] {
    name,
    "photoUrl": photo.asset->url
  }
}
`;

/**
 * Get all data needed for the yoga page
 */
export const yogaPageDataQuery = groq`
{
  "services": *[_type == "service" && site in ["yoga", "both"]] | order(order asc) {
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
    order,
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
  },
  "locations": *[_type == "location" && usedBy in ["yoga", "both"]] | order(order asc) {
    _id,
    name,
    shortName,
    address,
    googleMapsUrl,
    "imageUrl": image.asset->url,
    schedule,
    pricing
  },
  "upcomingEvents": *[_type == "event" && site in ["yoga", "both"] && startDate >= now()] | order(startDate asc)[0...3] {
    _id,
    title,
    startDate,
    description
  }
}
`;

/**
 * Get all data needed for the therapie page
 */
export const therapiePageDataQuery = groq`
{
  "services": *[_type == "service" && site in ["therapie", "both"]] | order(order asc) {
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
    order,
    imagePosition,
    sectionBackground,
    badge
  }
}
`;

/**
 * Get all data needed for the about page
 */
export const aboutPageDataQuery = groq`
{
  "about": *[_type == "aboutBea"][0] {
    name,
    "photoUrl": photo.asset->url,
    photoAlt,
    yogaContent,
    therapieContent,
    coreValues
  },
  "services": *[_type == "service" && site in [$siteId, "both"]] | order(order asc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    icon,
    shortDescription
  }
}
`;
