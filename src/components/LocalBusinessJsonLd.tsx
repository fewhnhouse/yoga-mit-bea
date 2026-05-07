import type { SiteId, SiteSettingsQueryResult } from '@/sanity/types'

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

/**
 * Schema.org JSON-LD for local business / yoga studio (Google Rich Results).
 * See: https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export default function LocalBusinessJsonLd({
  settings,
  siteId,
}: {
  settings: SiteSettingsQueryResult
  siteId: SiteId
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

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
