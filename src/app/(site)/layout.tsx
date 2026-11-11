import { SiteProvider } from '@/context/SiteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
import { LiveTags } from '@/components/DraftLive'
import { LivePreview } from '@/components/LivePreview'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import {
  navigationDataQuery,
  siteSettingsQuery,
  locationsForSiteQuery,
  servicesForSiteQuery,
} from '@/sanity/lib/queries'
import type {
  SiteSettingsQueryResult,
  SiteId,
  LocationsForSiteQueryResult,
  ServicesForSiteQueryResult,
} from '@/sanity/types'
import type { SanityNavigation } from '@/types/site'

interface SiteLayoutData {
  siteId: SiteId
  nav: SanityNavigation
  settings: SiteSettingsQueryResult
  locations: LocationsForSiteQueryResult
  services: ServicesForSiteQueryResult
  tags: string[]
}

async function getSiteLayoutData(): Promise<SiteLayoutData> {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  const [nav, settings, locations, services] = await Promise.all([
    sanityFetch({
      query: navigationDataQuery,
      params: { siteId, siteSettingsId },
    }),
    sanityFetch({
      query: siteSettingsQuery,
      params: { siteSettingsId },
      stega: false,
    }),
    sanityFetch({
      query: locationsForSiteQuery,
      params: { siteId },
      stega: false,
    }),
    sanityFetch({
      query: servicesForSiteQuery,
      params: { siteId },
      stega: false,
    }),
  ])
  const navData = nav.data
  const settingsData = settings.data

  if (!navData) {
    throw new Error(`[SiteLayout] Missing navigation data for site "${siteId}".`)
  }

  if (!settingsData) {
    throw new Error(`[SiteLayout] Missing site settings for site "${siteId}".`)
  }

  return {
    siteId,
    nav: {
      headerNavigation: navData.headerNavigation ?? undefined,
      services: navData.services ?? undefined,
    },
    settings: settingsData,
    locations: locations.data ?? [],
    services: services.data ?? [],
    tags: [nav, settings, locations, services].flatMap((result) => result.tags),
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { siteId, nav, settings, locations, services, tags } =
    await getSiteLayoutData()

  return (
    <SiteProvider
      sanityNav={nav}
      siteSettings={settings}
      initialSiteId={siteId}
    >
      <LocalBusinessJsonLd
        settings={settings}
        siteId={siteId}
        locations={locations}
        services={services}
      />
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <LiveTags tags={tags} />
      <LivePreview />
    </SiteProvider>
  )
}
