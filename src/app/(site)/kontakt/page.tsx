import type { Metadata } from 'next'
import { resolveSiteDisplayName } from '@/lib/resolveSiteDisplayName'
import KontaktContent from './KontaktContent'

export async function generateMetadata(): Promise<Metadata> {
  const siteName = await resolveSiteDisplayName()

  return {
    title: 'Kontakt',
    description:
      'Kontaktiere Bea für Yoga und Psychotherapie. Vereinbare einen Termin für Yoga Individuell, Yogakurse oder therapeutische Behandlungen.',
    openGraph: {
      siteName,
      title: 'Kontakt | Yoga & Psychotherapie mit Bea',
      description:
        'Kontaktiere Bea für Yoga und Psychotherapie. Vereinbare deinen persönlichen Termin.',
    },
  }
}

export default function KontaktPage() {
  return <KontaktContent />
}
