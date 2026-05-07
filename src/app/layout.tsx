import type { Metadata } from 'next'
import { Roboto, Noto_Sans } from 'next/font/google'
import { draftMode, headers } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import './globals.css'
import { SanityLive } from '@/sanity/lib/live'
import { DisableDraftMode } from '@/components/DisableDraftMode'
import { getSiteId, getSingletonIds } from '@/lib/getSiteId'
import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { Analytics } from '@vercel/analytics/next'
import { getCanonicalOriginFromHeaders } from '@/lib/siteFromHost'

const cormorant = Roboto({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const lora = Noto_Sans({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const canonicalOrigin = getCanonicalOriginFromHeaders(headersList)
  const metadataBase = new URL(canonicalOrigin)

  const siteId = await getSiteId()
  const { siteSettingsId } = getSingletonIds(siteId)

  // Fetch site settings from Sanity for description
  const { data: settings } = await sanityFetch({
    query: siteSettingsQuery,
    params: { siteSettingsId },
  })

  if (!settings) {
    throw new Error(`[RootLayout] Missing site settings for site "${siteId}".`)
  }

  if (typeof settings.name !== 'string' || settings.name.trim().length === 0) {
    throw new Error(
      `[RootLayout] Missing required field "name" for site "${siteId}".`
    )
  }

  const siteName = settings.name

  // Use description from Sanity, or undefined to let pages set their own
  const siteDescription = settings?.seoDescription || undefined

  const ogPrimary =
    typeof settings.ogImageUrl === 'string' && settings.ogImageUrl.trim()
      ? settings.ogImageUrl.trim()
      : null

  const defaultImages = ogPrimary
    ? [{ url: ogPrimary, width: 1200, height: 630, alt: siteName }]
    : [
        {
          url: '/images/background.jpg',
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ]

  return {
    metadataBase,
    title: {
      default: siteName,
      template: `${siteName} | %s`,
    },
    description: siteDescription,
    keywords: [
      'Yoga',
      'Yoga Lonetal',
      'Yoga Bernstadt',
      'Yogakurse',
      'Yoga Individuell',
      'Psychotherapie',
      'Therapeutische Massage',
      'Atemtherapie',
      'Klangschalentherapie',
      'Yoga mit Bea',
      'Psychotherapie mit Bea',
    ],
    authors: [{ name: 'Beate Ilg-Wohnhaas' }],
    creator: 'Beate Ilg-Wohnhaas',
    publisher: siteName,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: canonicalOrigin,
      siteName: siteName,
      title: siteName,
      description: siteDescription,
      images: defaultImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: siteDescription,
      images: defaultImages.map((img) => img.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add these when you have them:
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang='de' className={`${cormorant.variable} ${lora.variable}`}>
      <Analytics />
      <body className='antialiased min-h-screen flex flex-col'>
        {children}
        <SanityLive />
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  )
}
