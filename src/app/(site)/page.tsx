import type { Metadata } from 'next'
import DynamicHomeContent from './DynamicHomeContent'
import { sanityFetch } from '@/sanity/lib/live'
import { homepageFromSettingsQuery } from '@/sanity/lib/queries'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { notFound } from 'next/navigation'

export async function generateMetadata(): Promise<Metadata> {
  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  const { data } = await sanityFetch({
    query: homepageFromSettingsQuery,
    params: { siteId, siteSettingsId },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settings = data?.settings as any
  const homepage = settings?.homepage
  const pageTitle = homepage?.seoTitle || homepage?.title || 'Startseite'
  const fallbackSiteName =
    siteId === 'yoga' ? 'Yoga mit Bea' : 'Psychotherapie mit Bea'
  const siteName = settings?.name || fallbackSiteName
  
  // Use page description, fall back to site description
  const description = homepage?.seoDescription || settings?.seoDescription || undefined
  const keywords = homepage?.seoKeywords || undefined

  return {
    title: pageTitle,
    description,
    keywords,
    openGraph: {
      title: `${siteName} | ${pageTitle}`,
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
      testimonials={data?.testimonials || []}
    />
  )
}
