import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

interface ImageTextSectionProps {
  // Image configuration
  imageUrl?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  aspectRatio?: '4/5' | '3/4' | '4/3'

  // Text content
  label?: string
  title: string
  tagline?: string
  description?: string[]
  cta?: {
    text?: string
    href?: string
  }
  headingLevel?: 'h1' | 'h2'

  // Section styling
  background?: 'light' | 'cream' | 'gradient' | 'pattern'
  decorativeBlobs?: boolean
  padding?: 'hero' | 'section'
}

export default function ImageTextSection({
  imageUrl,
  imageAlt = '',
  imagePosition = 'left',
  aspectRatio = '4/5',

  label,
  title,
  tagline,
  description = [],
  cta,
  headingLevel = 'h2',

  background = 'pattern',
  decorativeBlobs = true,
  padding = 'section',
}: ImageTextSectionProps) {
  // Background classes
  const bgClasses: Record<string, string> = {
    light: 'bg-warm-white',
    cream: 'bg-cream',
    gradient: 'bg-gradient-to-br from-cream via-warm-white to-primary/10',
    pattern: 'bg-warm-white section-pattern',
  }

  // Padding classes
  const paddingClasses = padding === 'hero' ? 'pt-32 pb-20' : 'py-24'

  // Aspect ratio classes
  const aspectClasses: Record<string, string> = {
    '4/5': 'aspect-[4/5]',
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
  }

  const isImageRight = imagePosition === 'right'
  const isHero = padding === 'hero'

  // On mobile, hero sections show text first (order-2 for image, order-1 for text)
  // On desktop, respect the imagePosition setting
  const imageOrderClass = isHero
    ? `order-2 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`
    : isImageRight
      ? 'lg:order-1'
      : ''

  const textOrderClass = isHero
    ? `order-1 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`
    : isImageRight
      ? 'lg:order-2'
      : ''

  return (
    <section
      className={`relative ${paddingClasses} ${bgClasses[background]} overflow-hidden`}
    >
      {/* Decorative floating blobs */}
      {decorativeBlobs && (background === 'gradient' || isHero) && (
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
                className={`${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden shadow-2xl relative`}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt || title}
                  fill
                  className='object-cover rounded-2xl'
                  priority={padding === 'hero'}
                />
              </div>
            )}
            {/* Image decorative blobs */}
            {decorativeBlobs && (
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
              label={label || ''}
              title={title}
              as={headingLevel}
            />

            {tagline && (
              <p className='font-display text-xl text-primary-dark italic mb-6'>
                &bdquo;{tagline}&ldquo;
              </p>
            )}

            {description.length > 0 && (
              <div className='space-y-4 text-charcoal-light leading-relaxed'>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

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

