import type { Metadata } from 'next'
import TherapieContent from './TherapieContent'
import { sanityFetch } from '@/sanity/lib/live'
import { therapiePageDataQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Therapie Angebote',
  description:
    'Therapie mit Bea: Therapeutische Massage, Atemtherapie, Klangschalentherapie und Einzelsitzungen. Ganzheitliche Behandlungen für Körper und Seele.',
  openGraph: {
    title: 'Therapie Angebote | Therapie mit Bea',
    description:
      'Therapeutische Massage, Atemtherapie, Klangschalentherapie. Ganzheitliche Behandlungen für Körper und Seele.',
  },
  keywords: [
    'Therapeutische Massage',
    'Atemtherapie',
    'Klangschalentherapie',
    'Klangschalen',
    'Einzelsitzung',
    'Therapie',
    'Heilung',
  ],
}

export default async function TherapiePage() {
  const { data } = await sanityFetch({
    query: therapiePageDataQuery,
  })

  if (!data) {
    return notFound()
  }

  return <TherapieContent initialData={data} />
}
