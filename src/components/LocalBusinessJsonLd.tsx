import type {
  SiteId,
  SiteSettingsQueryResult,
  LocationsForSiteQueryResult,
  ServicesForSiteQueryResult,
} from '@/sanity/types'

/** Fields projected from `siteSettingsQuery` → `businessLocation` */
export type BusinessLocationQuery = {
  schemaOrgType?: string | null
  streetAddress?: string | null
  addressLocality?: string | null
  postalCode?: string | null
  addressRegion?: string | null
  addressCountry?: string | null
  latitude?: number | null
  longitude?: number | null
  serviceAreaDescription?: string | null
  sameAs?: string[] | null
} | null

/** Sanity typegen lists `businessLocation` as null-only; runtime projects the real object. */
type SettingsWithLocation = Omit<
  Extract<SiteSettingsQueryResult, { name: string }>,
  'businessLocation'
> & {
  businessLocation?: BusinessLocationQuery | null
}

/** Minimal fields for schema.org Place (site locations + service → location derefs). */
type VenueJsonLdInput = {
  name?: string | null
  streetAddress?: string | null
  postalCode?: string | null
  addressLocality?: string | null
  addressRegion?: string | null
  addressCountry?: string | null
  latitude?: number | null
  longitude?: number | null
  description?: string | null
  googleMapsUrl?: string | null
  imageUrl?: string | null
}

type PlaceWithId = Record<string, unknown> & { '@id': string }

function resolveCanonicalSiteUrl(domain: string | null | undefined): string {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (envBase) return envBase
  if (typeof domain === 'string' && domain.trim()) {
    const host = domain.replace(/^https?:\/\//i, '').split('/')[0]
    return `https://${host}`
  }
  return 'https://yogamitbea.de'
}

function defaultSchemaOrgType(siteId: SiteId): string {
  return siteId === 'yoga' ? 'YogaStudio' : 'ProfessionalService'
}

function placeUri(baseUrl: string, documentId: string): string {
  return `${baseUrl}#place:${encodeURIComponent(documentId)}`
}

function buildPlaceFromVenue(loc: VenueJsonLdInput): Record<string, unknown> | null {
  const street = typeof loc.streetAddress === 'string' ? loc.streetAddress.trim() : ''
  const postal = typeof loc.postalCode === 'string' ? loc.postalCode.trim() : ''
  const locality = typeof loc.addressLocality === 'string' ? loc.addressLocality.trim() : ''
  if (!street || !postal || !locality || !loc.name?.trim()) return null

  const country =
    typeof loc.addressCountry === 'string' && loc.addressCountry.trim()
      ? loc.addressCountry.trim()
      : 'DE'
  const region =
    typeof loc.addressRegion === 'string' && loc.addressRegion.trim()
      ? loc.addressRegion.trim()
      : undefined

  const place: Record<string, unknown> = {
    '@type': 'Place',
    name: loc.name.trim(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      postalCode: postal,
      addressLocality: locality,
      addressCountry: country,
      ...(region ? { addressRegion: region } : {}),
    },
  }

  const lat = typeof loc.latitude === 'number' ? loc.latitude : undefined
  const lng = typeof loc.longitude === 'number' ? loc.longitude : undefined
  if (lat !== undefined && lng !== undefined) {
    place.geo = {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    }
  }

  const desc =
    typeof loc.description === 'string' && loc.description.trim()
      ? loc.description.trim()
      : undefined
  if (desc) place.description = desc

  const mapUrl =
    typeof loc.googleMapsUrl === 'string' && loc.googleMapsUrl.trim()
      ? loc.googleMapsUrl.trim()
      : undefined
  if (mapUrl) place.hasMap = mapUrl

  const img =
    typeof loc.imageUrl === 'string' && loc.imageUrl.trim()
      ? loc.imageUrl.trim()
      : undefined
  if (img) place.image = img

  return place
}

function collectPlacesById(
  baseUrl: string,
  locations: LocationsForSiteQueryResult,
  services: ServicesForSiteQueryResult,
): Map<string, PlaceWithId> {
  const placeById = new Map<string, PlaceWithId>()

  const ingest = (loc: VenueJsonLdInput & { _id?: string }) => {
    if (typeof loc._id !== 'string' || !loc._id) return
    if (placeById.has(loc._id)) return
    const body = buildPlaceFromVenue(loc)
    if (!body) return
    placeById.set(loc._id, { ...body, '@id': placeUri(baseUrl, loc._id) })
  }

  for (const loc of locations ?? []) {
    ingest(loc as VenueJsonLdInput & { _id: string })
  }

  for (const svc of services ?? []) {
    const locs = svc.locations
    if (!Array.isArray(locs)) continue
    for (const loc of locs) {
      if (loc && typeof loc === 'object') {
        ingest(loc as VenueJsonLdInput & { _id?: string })
      }
    }
  }

  return placeById
}

/**
 * Schema.org JSON-LD for local business / yoga studio (Google Rich Results).
 * Uses @graph with Service + ServiceChannel for venue-specific offerings.
 * See: https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export default function LocalBusinessJsonLd({
  settings,
  siteId,
  locations = [],
  services = [],
}: {
  settings: SiteSettingsQueryResult
  siteId: SiteId
  locations?: LocationsForSiteQueryResult
  services?: ServicesForSiteQueryResult
}) {
  if (!settings || typeof settings !== 'object') return null

  const s = settings as SettingsWithLocation
  const name = typeof s.name === 'string' ? s.name.trim() : ''
  if (!name) return null

  const bl = s.businessLocation
  const street = typeof bl?.streetAddress === 'string' ? bl.streetAddress.trim() : ''
  const locality = typeof bl?.addressLocality === 'string' ? bl.addressLocality.trim() : ''
  const postal = typeof bl?.postalCode === 'string' ? bl.postalCode.trim() : ''

  if (!street || !locality || !postal) {
    return null
  }

  const country =
    typeof bl?.addressCountry === 'string' && bl.addressCountry.trim()
      ? bl.addressCountry.trim()
      : 'DE'
  const region =
    typeof bl?.addressRegion === 'string' && bl.addressRegion.trim()
      ? bl.addressRegion.trim()
      : undefined

  const schemaOrgType =
    (typeof bl?.schemaOrgType === 'string' && bl.schemaOrgType.trim()
      ? bl.schemaOrgType.trim()
      : null) || defaultSchemaOrgType(siteId)

  const baseUrl = resolveCanonicalSiteUrl(s.domain)
  const businessId = `${baseUrl}#business`

  const telephone =
    typeof s.contactPhone === 'string' && s.contactPhone.trim()
      ? s.contactPhone.trim()
      : undefined
  const email =
    typeof s.contactEmail === 'string' && s.contactEmail.trim()
      ? s.contactEmail.trim()
      : undefined

  const imageUrl =
    typeof s.ogImageUrl === 'string' && s.ogImageUrl
      ? s.ogImageUrl
      : typeof s.logoUrl === 'string' && s.logoUrl
        ? s.logoUrl
        : `${baseUrl}/images/background.jpg`

  const businessNode: Record<string, unknown> = {
    '@id': businessId,
    '@type': schemaOrgType,
    name,
    url: baseUrl,
    image: imageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: locality,
      postalCode: postal,
      addressCountry: country,
      ...(region ? { addressRegion: region } : {}),
    },
  }

  if (telephone) businessNode.telephone = telephone
  if (email) businessNode.email = email

  const lat = typeof bl?.latitude === 'number' ? bl.latitude : undefined
  const lng = typeof bl?.longitude === 'number' ? bl.longitude : undefined
  if (lat !== undefined && lng !== undefined) {
    businessNode.geo = {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    }
  }

  const areaText =
    typeof bl?.serviceAreaDescription === 'string' && bl.serviceAreaDescription.trim()
      ? bl.serviceAreaDescription.trim()
      : undefined
  if (areaText) {
    businessNode.areaServed = areaText
  }

  const sameAs =
    Array.isArray(bl?.sameAs) && bl.sameAs.length > 0
      ? bl.sameAs.filter((u): u is string => typeof u === 'string' && /^https?:\/\//i.test(u))
      : []
  if (sameAs.length > 0) {
    businessNode.sameAs = sameAs
  }

  const placeById = collectPlacesById(baseUrl, locations, services)
  const placeIds = [...placeById.keys()].sort()

  if (placeIds.length === 1) {
    businessNode.location = { '@id': placeById.get(placeIds[0])!['@id'] }
  } else if (placeIds.length > 1) {
    businessNode.location = placeIds.map((id) => ({ '@id': placeById.get(id)!['@id'] }))
  }

  const placeNodes = placeIds.map((id) => placeById.get(id)!)

  const serviceNodes: Record<string, unknown>[] = []
  for (const svc of services ?? []) {
    const slugToken =
      typeof svc.slug === 'string' && svc.slug.trim() ? svc.slug.trim() : svc._id
    const serviceId = `${baseUrl}#service:${encodeURIComponent(slugToken)}`

    const channels: Record<string, unknown>[] = []
    const locs = svc.locations
    if (Array.isArray(locs)) {
      for (const loc of locs) {
        const lid = loc && typeof loc === 'object' && '_id' in loc ? (loc as { _id?: string })._id : undefined
        if (typeof lid !== 'string') continue
        const placeNode = placeById.get(lid)
        if (!placeNode) continue
        channels.push({
          '@type': 'ServiceChannel',
          serviceLocation: { '@id': placeNode['@id'] },
          providesService: { '@id': serviceId },
        })
      }
    }

    const node: Record<string, unknown> = {
      '@type': 'Service',
      '@id': serviceId,
      name: svc.title,
      provider: { '@id': businessId },
    }

    const shortDesc =
      typeof svc.shortDescription === 'string' ? svc.shortDescription.trim() : ''
    if (shortDesc) node.description = shortDesc

    const pageSlug = typeof svc.pageSlug === 'string' ? svc.pageSlug.trim() : ''
    if (pageSlug) node.url = `${baseUrl}/${pageSlug}`

    const svcImg =
      typeof svc.imageUrl === 'string' && svc.imageUrl.trim()
        ? svc.imageUrl.trim()
        : undefined
    if (svcImg) node.image = svcImg

    if (channels.length > 0) node.availableChannel = channels

    serviceNodes.push(node)
  }

  const graph: Record<string, unknown>[] = [businessNode, ...placeNodes, ...serviceNodes]

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
