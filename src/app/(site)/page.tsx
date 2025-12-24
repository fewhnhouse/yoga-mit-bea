import type { Metadata } from 'next'
import DynamicHomeContent from './DynamicHomeContent'
import { sanityFetch } from '@/sanity/lib/live'
import { homepageFromSettingsQuery } from '@/sanity/lib/queries'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { notFound } from 'next/navigation'
import { sites } from '@/config/sites'

export async function generateMetadata(): Promise<Metadata> {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)
  const currentSite = sites[siteId]

  const { data } = await sanityFetch({
    query: homepageFromSettingsQuery,
    params: { siteId, siteSettingsId },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settings = data?.settings as any
  const homepage = settings?.homepage
  const pageTitle = homepage?.seoTitle || homepage?.title || 'Startseite'
  
  // Use page description, fall back to site description
  const description = homepage?.seoDescription || settings?.seoDescription || undefined

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: `${currentSite.name} | ${pageTitle}`,
      description,
    },
  }
}

export default async function HomePage() {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  // Fetch homepage from site settings
  const { data } = await sanityFetch({
    query: homepageFromSettingsQuery,
    params: {
      siteId,
      siteSettingsId,
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settings = data?.settings as any
  const homepage = settings?.homepage

  if (!homepage?.sections || homepage.sections.length === 0) {
    return notFound()
  }

  return (
    <DynamicHomeContent
      page={homepage}
      services={data?.services || []}
      locations={data?.locations || []}
      testimonials={data?.testimonials || []}
    />
  )
}
