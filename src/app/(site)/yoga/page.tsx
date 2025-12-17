import type { Metadata } from 'next'
import YogaContent from './YogaContent'
import { sanityFetch } from '@/sanity/lib/live'
import { yogaPageDataQuery } from '@/sanity/lib/queries'
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

export default async function YogaPage() {
  const { data } = await sanityFetch({
    query: yogaPageDataQuery,
  })

  if (!data) {
    return notFound()
  }

  return <YogaContent initialData={data} />
}
