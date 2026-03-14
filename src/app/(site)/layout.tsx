import { SiteProvider } from '@/context/SiteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import { navigationDataQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import type { SiteSettingsQueryResult } from '@/sanity/types'
import type { SanityNavigation } from '@/types/site'

interface SiteLayoutData {
  nav?: SanityNavigation
  settings?: SiteSettingsQueryResult
}

async function getSiteLayoutData(): Promise<SiteLayoutData> {
  try {
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

    const nav = navData
      ? {
          homepageSlug: navData.homepageSlug ?? undefined,
          pages: navData.pages ?? undefined,
          services: navData.services ?? undefined,
        }
      : undefined

    return {
      nav,
      settings: settingsData ?? undefined,
    }
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return {}
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { nav, settings } = await getSiteLayoutData()

  return (
    <SiteProvider sanityNav={nav} siteSettings={settings}>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </SiteProvider>
  )
}
