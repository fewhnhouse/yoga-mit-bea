import { SiteProvider } from '@/context/SiteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import { navigationDataQuery } from '@/sanity/lib/queries'
import type { SanityNavigation } from '@/config/sites'

async function getNavigation(): Promise<SanityNavigation | undefined> {
  try {
    const siteId = await getSiteId()
    const { siteSettingsId } = getSingletonIds(siteId)

    const { data } = await sanityFetch({
      query: navigationDataQuery,
      params: { siteId, siteSettingsId },
    })

    if (!data) return undefined

    return {
      homepageSlug: data.homepageSlug ?? undefined,
      pages: data.pages ?? undefined,
      services: data.services ?? undefined,
    }
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return undefined
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sanityNav = await getNavigation()

  return (
    <SiteProvider sanityNav={sanityNav}>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </SiteProvider>
  )
}
