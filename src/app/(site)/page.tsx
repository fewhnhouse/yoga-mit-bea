import type { Metadata } from 'next'
import DynamicHomeContent from './DynamicHomeContent'
import { sanityFetch } from '@/sanity/lib/live'
import { homepageFromSettingsQuery } from '@/sanity/lib/queries'
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
