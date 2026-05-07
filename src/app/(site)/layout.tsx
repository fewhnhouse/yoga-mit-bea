import { SiteProvider } from '@/context/SiteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
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
}

async function getSiteLayoutData(): Promise<SiteLayoutData> {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  const [{ data: navData }, { data: settingsData }, { data: locationsData }, { data: servicesData }] =
    await Promise.all([
      sanityFetch({
        query: navigationDataQuery,
        params: { siteId, siteSettingsId },
      }),
      sanityFetch({
        query: siteSettingsQuery,
        params: { siteSettingsId },
      }),
      sanityFetch({
        query: locationsForSiteQuery,
        params: { siteId },
      }),
      sanityFetch({
        query: servicesForSiteQuery,
        params: { siteId },
      }),
    ])

  if (!navData) {
    throw new Error(`[SiteLayout] Missing navigation data for site "${siteId}".`)
  }

  if (!settingsData) {
    throw new Error(`[SiteLayout] Missing site settings for site "${siteId}".`)
  }

  return {
    siteId,
    nav: {
      homepageSlug: navData.homepageSlug ?? undefined,
      headerNavigation: navData.headerNavigation ?? undefined,
      pages: navData.pages ?? undefined,
      services: navData.services ?? undefined,
    },
    settings: settingsData,
    locations: locationsData ?? [],
    services: servicesData ?? [],
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { siteId, nav, settings, locations, services } = await getSiteLayoutData()

  return (
    <SiteProvider sanityNav={nav} siteSettings={settings}>
      <LocalBusinessJsonLd
        settings={settings}
        siteId={siteId}
        locations={locations}
        services={services}
      />
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </SiteProvider>
  )
}
