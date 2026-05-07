import type {
  SiteId,
  SiteSettingsQueryResult,
  LocationsForSiteQueryResult,
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

function buildPlaceFromVenue(
  loc: LocationsForSiteQueryResult[number],
): Record<string, unknown> | null {
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

/**
 * Schema.org JSON-LD for local business / yoga studio (Google Rich Results).
 * See: https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export default function LocalBusinessJsonLd({
  settings,
  siteId,
  locations = [],
}: {
  settings: SiteSettingsQueryResult
  siteId: SiteId
  locations?: LocationsForSiteQueryResult
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

  const payload: Record<string, unknown> = {
    '@context': 'https://schema.org',
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

  if (telephone) payload.telephone = telephone
  if (email) payload.email = email

  const lat = typeof bl?.latitude === 'number' ? bl.latitude : undefined
  const lng = typeof bl?.longitude === 'number' ? bl.longitude : undefined
  if (lat !== undefined && lng !== undefined) {
    payload.geo = {
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
    payload.areaServed = areaText
  }

  const sameAs =
    Array.isArray(bl?.sameAs) && bl.sameAs.length > 0
      ? bl.sameAs.filter((u): u is string => typeof u === 'string' && /^https?:\/\//i.test(u))
      : []
  if (sameAs.length > 0) {
    payload.sameAs = sameAs
  }

  const venuePlaces = (locations ?? [])
    .map(buildPlaceFromVenue)
    .filter((p): p is Record<string, unknown> => p !== null)

  if (venuePlaces.length === 1) {
    payload.location = venuePlaces[0]
  } else if (venuePlaces.length > 1) {
    payload.location = venuePlaces
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
