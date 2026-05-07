/** Fields projected from Sanity location documents */
export type LocationAddressFields = {
  streetAddress?: string | null
  postalCode?: string | null
  addressLocality?: string | null
  addressRegion?: string | null
  addressCountry?: string | null
}

/**
 * German-style single-line display: "Straße, PLZ Ort" (+ optional region).
 */
export function formatLocationAddress(loc: LocationAddressFields): string {
  const street = loc.streetAddress?.trim()
  const zip = loc.postalCode?.trim()
  const city = loc.addressLocality?.trim()
  const region = loc.addressRegion?.trim()

  const cityLine = [zip, city].filter(Boolean).join(' ')
  const segments = [street, cityLine, region].filter(Boolean)
  return segments.join(', ')
}
