import type { SiteId } from '@/sanity/types'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'

/** Canonical marketing name for OG `site_name`, meta publisher, etc. */
export async function resolveSiteDisplayName(forSiteId?: SiteId): Promise<string> {
  const siteId = forSiteId ?? (await getSiteId())
  const { siteSettingsId } = getSingletonIds(siteId)
  const { data: settings } = await sanityFetch({
    query: siteSettingsQuery,
    params: { siteSettingsId },
  })
  if (settings && typeof settings.name === 'string' && settings.name.trim()) {
    return settings.name.trim()
  }
  return siteId === 'yoga' ? 'Yoga mit Bea' : 'Psychotherapie mit Bea'
}
