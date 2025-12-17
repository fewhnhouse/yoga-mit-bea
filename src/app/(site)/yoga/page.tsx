import type { Metadata } from 'next'
import YogaContent from './YogaContent'
import { client } from '@/sanity/client'
import { yogaPageDataQuery } from '@/sanity/lib/queries'
import type { YogaPageData } from '@/sanity/types'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Yoga Angebote',
  description:
    'Yoga mit Bea: Yoga Individuell für persönliche Einzelstunden, Yogakurse im Schloss Bernstadt und Wacholder, Yogatage, Yogawochenenden und Yoga Weg im Lonetal.',
  openGraph: {
    title: 'Yoga Angebote | Yoga mit Bea',
    description:
      'Yoga Individuell, Yogakurse, Yogatage und Yoga Weg im Lonetal. Finde deinen Yoga-Weg mit Bea.',
  },
  keywords: [
    'Yoga Individuell',
    'Yogakurse',
    'Yoga Bernstadt',
    'Yoga Schloss',
    'Yoga Wacholder',
    'Yogatag',
    'Yogawochenende',
    'Yoga Lonetal',
    'Yoga Weg',
  ],
}

async function getYogaData(): Promise<YogaPageData | null> {
  try {
    const data = await client.fetch<YogaPageData>(
      yogaPageDataQuery,
      {},
      { next: { revalidate: 60 } }
    )
    return data
  } catch (error) {
    console.error('Error fetching yoga data:', error)
    return null
  }
}

export default async function YogaPage() {
  const data = await getYogaData()
  if (!data) {
    return notFound()
  }
  return <YogaContent initialData={data} />
}
