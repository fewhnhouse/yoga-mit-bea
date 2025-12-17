import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import { client } from '@/sanity/client'
import { homepageDataQuery } from '@/sanity/lib/queries'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import type { HomepageData } from '@/sanity/types'
import { notFound } from 'next/navigation';

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

async function getHomepageData(
  siteId: 'yoga' | 'therapie'
): Promise<HomepageData | null> {
  const { siteSettingsId, homepageId } = getSingletonIds(siteId)

  try {
    const data = await client.fetch<HomepageData>(
      homepageDataQuery,
      {
        siteId,
        siteSettingsId,
        homepageId,
      },
      { next: { revalidate: 60 } }
    )
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

export default async function HomePage() {
  const siteId = await getSiteId()
  const data = await getHomepageData(siteId)
  if (!data) {
    return notFound()
  }

  return <HomeContent initialData={data} />
}
