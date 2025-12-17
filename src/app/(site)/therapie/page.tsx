import { Metadata } from 'next'
import TherapieContent from './TherapieContent'
import { client } from '@/sanity/client'
import { therapiePageDataQuery } from '@/sanity/lib/queries'
import type { TherapiePageData } from '@/sanity/types'

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

async function getTherapieData(): Promise<TherapiePageData | null> {
  try {
    const data = await client.fetch<TherapiePageData>(
      therapiePageDataQuery,
      {},
      { next: { revalidate: 60 } }
    )
    return data
  } catch (error) {
    console.error('Error fetching therapie data:', error)
    return null
  }
}

export default async function TherapiePage() {
  const data = await getTherapieData()
  console.log('Therapie data:', data)
  return <TherapieContent initialData={data} />
}
