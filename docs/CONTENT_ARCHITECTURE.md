# Yoga & Therapie mit Bea - Content Architecture

## Overview

This document outlines the content structure for the Sanity CMS implementation, addressing the multi-site challenge of serving two domains (yoga-mit-bea.de and therapie-mit-bea.de) from a single Next.js application.

---

## Current Pages & Content Analysis

### Page Inventory

| Page | URL | Site-Specific Content | Shared Content | Priority |
|------|-----|----------------------|----------------|----------|
| **Homepage** | `/` | Hero, Services, CTA | About Preview, Testimonials | High |
| **Yoga** | `/yoga` | All content | None | High |
| **Therapie** | `/therapie` | All content | None | High |
| **Über Mich** | `/ueber-mich` | Philosophy text, Approach | Name, Photo, Core values | Medium |
| **Kontakt** | `/kontakt` | Subject options | Contact info, Form | Medium |
| **Yoga Online** | `/zum-mitueben` | All content (Yoga only) | None | Low |
| **Impressum** | `/impressum` | None | All (legal) | Low |
| **Datenschutz** | `/datenschutz` | None | All (legal) | Low |

---

## Content Categories

### 1. **Singleton Documents** (One instance per site or global)

These are unique documents that exist only once:

| Document | Scope | Description |
|----------|-------|-------------|
| `siteSettings` | Per Site | Name, tagline, domain, colors, navigation |
| `aboutBea` | Shared | Bio, photo, core philosophy (site-agnostic) |
| `contactInfo` | Shared | Email, phone, address, Google Meet link |

### 2. **Collection Documents** (Multiple instances)

| Document | Scope | Description |
|----------|-------|-------------|
| `service` | Per Site | Individual yoga or therapy offerings |
| `location` | Shared | Physical locations (Schloss, Wacholder) |
| `event` | Per Site | Yogatag, Yogawochenende, etc. |
| `testimonial` | Per Site | Customer testimonials |
| `page` | Per Site / Shared | Generic content pages |

---

## Proposed Schema Structure

### Core Principle: Site Affiliation Field

Most documents should have a `site` field to indicate which site(s) they belong to:

```typescript
defineField({
  name: "site",
  title: "Belongs to Site",
  type: "string",
  options: {
    list: [
      { title: "Yoga only", value: "yoga" },
      { title: "Therapie only", value: "therapie" },
      { title: "Both sites", value: "both" },
    ],
  },
  initialValue: "both",
})
```

---

## Detailed Schema Designs

### 1. `siteSettings` (Singleton per site)

```typescript
// One document per site: "yoga" and "therapie"
{
  name: "siteSettings",
  fields: [
    { name: "siteId", type: "string" },  // "yoga" | "therapie"
    { name: "name", type: "string" },     // "Yoga mit Bea"
    { name: "tagline", type: "string" },  // "Durch Yoga gehst du nur..."
    { name: "domain", type: "string" },   // "yogamitbea.de"
    { name: "primaryColor", type: "string" },
    { name: "logo", type: "image" },
    { name: "ogImage", type: "image" },   // For social sharing
    { name: "navLinks", type: "array" },
    { name: "footerLinks", type: "object" },
  ]
}
```

### 2. `aboutBea` (Singleton - shared)

```typescript
{
  name: "aboutBea",
  fields: [
    { name: "name", type: "string" },
    { name: "photo", type: "image" },
    { name: "photoAlt", type: "string" },
    
    // Site-specific content as nested objects
    { name: "yoga", type: "object", fields: [
      { name: "intro", type: "text" },
      { name: "philosophy", type: "array", of: [{ type: "block" }] },
      { name: "approach", type: "array", of: [{ type: "block" }] },
    ]},
    { name: "therapie", type: "object", fields: [
      { name: "intro", type: "text" },
      { name: "philosophy", type: "array", of: [{ type: "block" }] },
      { name: "approach", type: "array", of: [{ type: "block" }] },
    ]},
    
    // Shared values
    { name: "coreValues", type: "array", of: [
      { type: "object", fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
        { name: "icon", type: "string" },
      ]}
    ]},
  ]
}
```

### 3. `service` (Collection - per site)

```typescript
{
  name: "service",
  fields: [
    { name: "site", type: "string" },  // "yoga" | "therapie"
    { name: "slug", type: "slug" },
    { name: "title", type: "string" },
    { name: "subtitle", type: "string" },
    { name: "shortDescription", type: "text" },
    { name: "fullDescription", type: "array", of: [{ type: "block" }] },
    { name: "image", type: "image" },
    { name: "icon", type: "string" },
    { name: "features", type: "array", of: [{ type: "string" }] },
    { name: "benefits", type: "array", of: [{ type: "string" }] },
    { name: "duration", type: "string" },
    { name: "pricing", type: "string" },
    { name: "order", type: "number" },
  ]
}
```

**Yoga Services:**
- Yoga Individuell
- Yogakurse
- Yoga aktuell
- Yoga Weg
- Yoga Online

**Therapie Services:**
- Therapeutische Massage
- Atemtherapie
- Klangschalentherapie
- Therapeutische Einzelsitzung

### 4. `location` (Collection - shared)

```typescript
{
  name: "location",
  fields: [
    { name: "name", type: "string" },      // "Yoga im Schloss"
    { name: "shortName", type: "string" }, // "Schloss"
    { name: "description", type: "text" },
    { name: "address", type: "string" },
    { name: "googleMapsUrl", type: "url" },
    { name: "image", type: "image" },
    { name: "schedule", type: "array", of: [
      { type: "object", fields: [
        { name: "day", type: "string" },
        { name: "times", type: "string" },
      ]}
    ]},
    { name: "pricing", type: "string" },
    { name: "maxParticipants", type: "number" },
    { name: "usedBy", type: "string" },    // "yoga" | "therapie" | "both"
    { name: "order", type: "number" },
  ]
}
```

**Locations:**
- Schloss Bernstadt
- Wacholder Deggingen

### 5. `event` (Collection - per site)

```typescript
{
  name: "event",
  fields: [
    { name: "site", type: "string" },
    { name: "title", type: "string" },
    { name: "eventType", type: "string" },  // "yogatag" | "yogawochenende" | etc.
    { name: "description", type: "text" },
    { name: "date", type: "datetime" },
    { name: "location", type: "reference", to: [{ type: "location" }] },
    { name: "image", type: "image" },
    { name: "isUpcoming", type: "boolean" },
    { name: "registrationOpen", type: "boolean" },
    { name: "price", type: "string" },
  ]
}
```

### 6. `testimonial` (Collection - per site)

```typescript
{
  name: "testimonial",
  fields: [
    { name: "site", type: "string" },  // "yoga" | "therapie" | "both"
    { name: "name", type: "string" },
    { name: "quote", type: "text" },
    { name: "service", type: "reference", to: [{ type: "service" }] },
    { name: "featured", type: "boolean" },
    { name: "order", type: "number" },
  ]
}
```

### 7. `page` (Collection - flexible)

For static pages like Impressum, Datenschutz, or future pages:

```typescript
{
  name: "page",
  fields: [
    { name: "site", type: "string" },  // "yoga" | "therapie" | "both"
    { name: "title", type: "string" },
    { name: "slug", type: "slug" },
    { name: "content", type: "array", of: [{ type: "block" }] },
    { name: "seoTitle", type: "string" },
    { name: "seoDescription", type: "text" },
  ]
}
```

### 8. `homepageContent` (Singleton per site)

```typescript
{
  name: "homepageContent",
  fields: [
    { name: "siteId", type: "string" },
    
    // Hero Section
    { name: "heroTitle", type: "string" },
    { name: "heroSubtitle", type: "text" },
    { name: "heroCta", type: "object", fields: [
      { name: "text", type: "string" },
      { name: "link", type: "string" },
    ]},
    
    // About Preview
    { name: "aboutPreviewText", type: "text" },
    { name: "aboutPreviewImage", type: "image" },
    
    // Quote Section
    { name: "quoteHeading", type: "string" },
    { name: "quoteText", type: "text" },
    
    // CTA Section
    { name: "ctaHeading", type: "string" },
    { name: "ctaText", type: "text" },
  ]
}
```

---

## Refactoring Recommendations

### Component Refactoring

To support CMS content, these components should be extracted and made more reusable:

#### 1. **HeroSection** → `components/sections/Hero.tsx`
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  ctaButtons?: { text: string; href: string; variant: "primary" | "secondary" }[];
  backgroundVariant?: "yoga" | "therapie";
}
```

#### 2. **ServiceCard** → `components/cards/ServiceCard.tsx`
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  variant?: "yoga" | "therapie";
}
```

#### 3. **LocationCard** → `components/cards/LocationCard.tsx`
```typescript
interface LocationCardProps {
  name: string;
  description: string;
  address: string;
  mapsUrl: string;
  schedule: { day: string; times: string }[];
  pricing: string;
  image?: string;
}
```

#### 4. **TestimonialCarousel** → `components/sections/Testimonials.tsx`
```typescript
interface TestimonialsProps {
  testimonials: { name: string; quote: string; id: string }[];
  variant?: "yoga" | "therapie";
}
```

#### 5. **FeatureGrid** → `components/sections/FeatureGrid.tsx`
```typescript
interface FeatureGridProps {
  features: { title: string; description: string; icon: string }[];
  columns?: 2 | 3 | 4;
  variant?: "yoga" | "therapie";
}
```

#### 6. **CTASection** → `components/sections/CTA.tsx`
```typescript
interface CTAProps {
  heading: string;
  text?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "yoga" | "therapie";
}
```

### Content Display Pattern

Each page should follow this pattern:

```typescript
// pages/yoga/page.tsx
export default async function YogaPage() {
  const services = await sanityClient.fetch(
    `*[_type == "service" && site in ["yoga", "both"]] | order(order asc)`
  );
  const locations = await sanityClient.fetch(
    `*[_type == "location" && usedBy in ["yoga", "both"]] | order(order asc)`
  );
  
  return <YogaContent services={services} locations={locations} />;
}
```

---

## Sanity Studio Structure

Organize the Sanity Studio desk for easy content management:

```
📁 Site Settings
  ├── Yoga Site Settings
  └── Therapie Site Settings

📁 About Bea
  └── (single document)

📁 Services
  ├── Yoga Services
  └── Therapie Services

📁 Locations
  ├── Schloss Bernstadt
  └── Wacholder

📁 Events
  ├── Upcoming Events
  └── Past Events

📁 Testimonials
  ├── Yoga Testimonials
  └── Therapie Testimonials

📁 Pages
  ├── Homepage (Yoga)
  ├── Homepage (Therapie)
  ├── Impressum
  └── Datenschutz
```

---

## Query Examples

### Get all services for current site:
```groq
*[_type == "service" && site in [$siteId, "both"]] | order(order asc) {
  _id,
  title,
  subtitle,
  slug,
  shortDescription,
  image,
  icon,
  features
}
```

### Get homepage content:
```groq
*[_type == "homepageContent" && siteId == $siteId][0] {
  heroTitle,
  heroSubtitle,
  heroCta,
  aboutPreviewText,
  "aboutImage": aboutPreviewImage.asset->url,
  quoteHeading,
  quoteText,
  ctaHeading,
  ctaText
}
```

### Get testimonials for site:
```groq
*[_type == "testimonial" && site in [$siteId, "both"] && featured == true] | order(order asc) {
  _id,
  name,
  quote
}
```

---

## Migration Strategy

### Phase 1: Core Setup
1. Update Sanity schemas as defined above
2. Create structure tool configuration for organized desk
3. Migrate hardcoded content to Sanity

### Phase 2: Component Refactoring
1. Extract reusable components
2. Add TypeScript interfaces for CMS data
3. Create data fetching utilities

### Phase 3: Content Integration
1. Update pages to fetch from Sanity
2. Add preview mode support
3. Set up revalidation/ISR

### Phase 4: Polish
1. Add content validation rules
2. Create custom input components if needed
3. Document content editing workflow for Bea

---

## Open Questions

1. **Testimonials**: Should Therapie have its own testimonials, or share Yoga ones?
2. **Events**: Should there be a separate events/calendar page?
3. **Online Yoga**: Should this be part of services or a standalone offering?
4. **Images**: Should we use Sanity's image CDN or keep local images?
5. **Preview**: Do we need live preview in the studio?

---

## Summary

The key insight is using a **site affiliation field** on most documents to control visibility. This allows:
- Content that appears on both sites ("both")
- Content exclusive to one site ("yoga" or "therapie")
- Shared components that adapt styling based on active site

This approach keeps content DRY while allowing full flexibility for site-specific content.


