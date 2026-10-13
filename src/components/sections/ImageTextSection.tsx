import Image from 'next/image'
import Link from 'next/link'
import type { PortableTextBlock } from '@portabletext/types'
import SectionDescription from '@/components/SectionDescription'
import SectionHeader from '@/components/SectionHeader'

interface ImageTextSectionProps {
  // Image configuration
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'

  // Text content
  title: string
  description?: PortableTextBlock[] | string[] | string
  cta?: {
    text?: string | null
    href?: string | null
  } | null

  // Section styling
  background?: 'light' | 'pattern'
  /** First section on the page: extra top padding, decorative blobs, text first on mobile */
  isHero?: boolean
}

export default function ImageTextSection({
  imageUrl,
  imageAlt = '',
  imagePosition = 'left',

  title,
  description,
  cta,

  background = 'pattern',
  isHero = false,
}: ImageTextSectionProps) {
  // Background classes
  const bgClasses: Record<string, string> = {
    light: 'bg-warm-white',
    pattern: 'bg-warm-white section-pattern',
  }

  // Padding classes
  const paddingClasses = isHero ? 'pt-32 pb-20' : 'py-24'

  const isImageRight = imagePosition === 'right'

  // On mobile, hero sections show text first (order-2 for image, order-1 for text)
  // On desktop, respect the imagePosition setting
  const imageOrderClass = isHero
    ? `order-2 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`
    : isImageRight
      ? 'lg:order-2'
      : 'lg:order-1'

  const textOrderClass = isHero
    ? `order-1 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`
    : isImageRight
      ? 'lg:order-1'
      : 'lg:order-2'

  return (
    <section
      className={`relative ${paddingClasses} ${bgClasses[background]} overflow-hidden`}
    >
      {/* Decorative floating blobs */}
      {isHero && (
        <>
          <div
            className='absolute top-20 right-10 w-64 h-64 bg-primary/5 organic-blob animate-float'
          />
          <div
            className='absolute bottom-10 left-10 w-48 h-48 bg-primary/5 organic-blob-2 animate-breathe'
          />
        </>
      )}

      <div className='container mx-auto px-6 relative'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Image */}
          <div className={`relative ${imageOrderClass}`}>
            {imageUrl && (
              <div
                className='aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative'
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt || title}
                  fill
                  className='object-cover rounded-2xl'
                  priority={isHero}
                />
              </div>
            )}
            {/* Image decorative blobs */}
            {background === 'pattern' && (
              <>
                <div
                  className={`absolute -bottom-6 ${isImageRight ? '-left-6' : '-right-6'} w-48 h-48 bg-primary/10 organic-blob -z-10`}
                />
                <div
                  className={`absolute -top-6 ${isImageRight ? '-right-6' : '-left-6'} w-32 h-32 bg-primary-light/10 organic-blob-2 -z-10`}
                />
              </>
            )}
          </div>

          {/* Text content */}
          <div className={textOrderClass}>
            <SectionHeader
              title={title}
              as='h2'
            />

            <SectionDescription
              value={description}
            />

            {cta?.text && cta?.href && (
              <Link
                href={cta.href}
                className='inline-flex items-center gap-2 mt-8 text-primary-dark hover:text-primary font-medium transition-colors group'
              >
                {cta.text}
                <svg
                  className='w-5 h-5 transform group-hover:translate-x-1 transition-transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
