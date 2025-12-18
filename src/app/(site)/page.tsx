import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import DynamicHomeContent from './DynamicHomeContent'
import { sanityFetch } from '@/sanity/lib/live'
import { homepageDataQuery, homepageFromSettingsQuery } from '@/sanity/lib/queries'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Yoga & Therapie mit Bea | Startseite',
  description:
    'Willkommen bei Yoga & Therapie mit Bea. Entdecke Yoga Individuell, Yogakurse im Schloss Bernstadt und Wacholder, sowie therapeutische Behandlungen im Lonetal.',
  openGraph: {
    title: 'Yoga & Therapie mit Bea',
    description:
      'Willkommen bei Yoga & Therapie mit Bea. Yoga Individuell, Yogakurse und therapeutische Behandlungen im Lonetal.',
  },
}

export default async function HomePage() {
  const siteId = await getSiteId()
  const { siteSettingsId, homepageId } = getSingletonIds(siteId)

  // First, try to fetch homepage from site settings (new dynamic system)
  const { data: dynamicData } = await sanityFetch({
    query: homepageFromSettingsQuery,
    params: {
      siteId,
      siteSettingsId,
    },
  })

  // If site settings has a homepage reference with sections, use the new dynamic system
  if (dynamicData?.settings?.homepage?.sections && dynamicData.settings.homepage.sections.length > 0) {
    return (
      <DynamicHomeContent
        page={dynamicData.settings.homepage}
        services={dynamicData.services || []}
        locations={dynamicData.locations || []}
        testimonials={dynamicData.testimonials || []}
      />
    )
  }

  // Otherwise, fall back to the legacy homepage system
  const { data } = await sanityFetch({
    query: homepageDataQuery,
    params: {
      siteId,
      siteSettingsId,
      homepageId,
    },
  })

  if (!data) {
    return notFound()
  }

  return <HomeContent initialData={data} />
}
