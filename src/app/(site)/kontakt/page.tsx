import type { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktiere Bea für Yoga und Psychotherapie. Vereinbare einen Termin für Yoga Individuell, Yogakurse oder therapeutische Behandlungen.',
  openGraph: {
    title: 'Kontakt | Yoga & Psychotherapie mit Bea',
    description:
      'Kontaktiere Bea für Yoga und Psychotherapie. Vereinbare deinen persönlichen Termin.',
  },
}

export default function KontaktPage() {
  return <KontaktContent />
}
