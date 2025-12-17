import type { Metadata } from 'next'
import UeberMichContent from './UeberMichContent'
import { sanityFetch } from '@/sanity/lib/live'
import { aboutPageDataQuery } from '@/sanity/lib/queries'
import { getSiteId } from '@/lib/getSiteId'
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

export default async function UeberMichPage() {
  const siteId = await getSiteId()

  const { data } = await sanityFetch({
    query: aboutPageDataQuery,
    params: { siteId },
  })

  if (!data) {
    return notFound()
  }

  return <UeberMichContent initialData={data} />
}
