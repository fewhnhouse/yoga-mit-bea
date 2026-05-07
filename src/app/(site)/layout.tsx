import { SiteProvider } from '@/context/SiteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import { navigationDataQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsQueryResult, SiteId } from '@/sanity/types'
import type { SanityNavigation } from '@/types/site'

interface SiteLayoutData {
  siteId: SiteId
  nav: SanityNavigation
  settings: SiteSettingsQueryResult
}

async function getSiteLayoutData(): Promise<SiteLayoutData> {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  const [{ data: navData }, { data: settingsData }] = await Promise.all([
    sanityFetch({
      query: navigationDataQuery,
      params: { siteId, siteSettingsId },
    }),
    sanityFetch({
      query: siteSettingsQuery,
      params: { siteSettingsId },
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
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { siteId, nav, settings } = await getSiteLayoutData()

  return (
    <SiteProvider sanityNav={nav} siteSettings={settings}>
      <LocalBusinessJsonLd settings={settings} siteId={siteId} />
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </SiteProvider>
  )
}
