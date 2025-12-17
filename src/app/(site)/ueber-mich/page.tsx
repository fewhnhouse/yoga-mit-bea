import type { Metadata } from 'next'
import UeberMichContent from './UeberMichContent'
import { client } from '@/sanity/client'
import { aboutPageDataQuery } from '@/sanity/lib/queries'
import { getSiteId } from '@/lib/getSiteId'
import type { AboutPageData } from '@/sanity/types'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Über Bea',
  description:
    'Lerne Bea kennen - Yogalehrerin und Therapeutin mit langjähriger Erfahrung. Erfahre mehr über meine Philosophie und meinen Weg.',
  openGraph: {
    title: 'Über Bea | Yoga & Therapie mit Bea',
    description: 'Lerne Bea kennen - Yogalehrerin und Therapeutin mit Herz.',
  },
}

async function getAboutData(): Promise<AboutPageData | null> {
  const siteId = await getSiteId()
  try {
    const data = await client.fetch<AboutPageData>(
      aboutPageDataQuery,
      { siteId },
      { next: { revalidate: 60 } }
    )
    return data
  } catch (error) {
    console.error('Error fetching about data:', error)
    return null
  }
}

export default async function UeberMichPage() {
  const data = await getAboutData()
  if (!data) {
    return notFound()
  }
  return <UeberMichContent initialData={data} />
}
