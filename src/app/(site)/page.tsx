import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import { sanityFetch } from '@/sanity/lib/live'
import { homepageDataQuery } from '@/sanity/lib/queries'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import type { HomepageData } from '@/sanity/types'
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

  const { data } = await sanityFetch<HomepageData>({
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
