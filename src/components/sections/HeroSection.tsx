import Link from 'next/link'
import Image from 'next/image'
import LotusIcon from '@/components/icons/LotusIcon'

interface HeroSectionProps {
  title?: string
  /** When the document title is rendered as sr-only h1 elsewhere, use a styled paragraph for the visible hero title. */
  titleAs?: 'h1' | 'p'
  tagline?: string
  subtitle?: string
  primaryCta?: {
    text?: string
    href?: string
  }
  secondaryCta?: {
    text?: string
    href?: string
  }
  imageUrl?: string
  personName?: string
  personRole?: string
}

export default function HeroSection({
  title,
  titleAs = 'h1',
  tagline,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  personName = 'Beate Ilg-Wohnhaas',
  personRole = 'Yoga und Psychotherapie',
}: HeroSectionProps) {
  // Use two-column layout when image is provided
  const hasImage = !!imageUrl
  const titleClassName = `font-display ${hasImage ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl lg:text-8xl'} font-light text-charcoal mb-6 animate-fade-in-up`

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-primary/10' />

      {/* Decorative Elements */}
      <div
        className='absolute top-20 left-10 w-64 h-64 bg-primary/5 organic-blob animate-float'
      />
      <div className={`absolute bottom-20 right-10 w-80 h-80 bg-primary/5 organic-blob-2 animate-float delay-300 ${hasImage ? 'hidden lg:block' : ''}`} />
      <div className={`absolute top-1/3 right-1/4 w-40 h-40 bg-blush/20 rounded-full animate-breathe ${hasImage ? 'hidden lg:block' : ''}`} />

      {/* Content */}
      <div className='relative container mx-auto px-6 pt-32 pb-20'>
        <div className={hasImage ? 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center' : 'text-center'}>
          {/* Text Content */}
          <div className={hasImage ? 'max-w-xl order-2 lg:order-1' : 'max-w-4xl mx-auto'}>
            {!hasImage && (
              <div className='flex justify-center mb-8'>
                <LotusIcon className='w-16 h-16 text-primary-dark lotus-animate' />
              </div>
            )}

            {hasImage && (
              <span className='text-primary-dark font-body text-sm tracking-widest uppercase mb-4 block animate-fade-in-up'>
                Willkommen
              </span>
            )}

            {title &&
              (titleAs === 'p' ? (
                <p className={titleClassName}>{title}</p>
              ) : (
                <h1 className={titleClassName}>{title}</h1>
              ))}

            {tagline && (
              <p
                className={`font-display text-xl md:text-2xl text-primary-dark italic mb-6 animate-fade-in-up delay-100 ${hasImage ? '' : 'max-w-2xl mx-auto'}`}
              >
                &bdquo;{tagline}&ldquo;
              </p>
            )}

            {subtitle && (
              <p className={`font-body text-lg md:text-xl text-charcoal-light mb-10 animate-fade-in-up delay-200 ${hasImage ? '' : 'max-w-2xl mx-auto'}`}>
                {subtitle}
              </p>
            )}

            <div className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 ${hasImage ? 'justify-start' : 'justify-center'}`}>
              {primaryCta?.text && primaryCta?.href && (
                <Link
                  href={primaryCta.href}
                  className='bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-full font-medium transition-colors text-center'
                >
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta?.text && secondaryCta?.href && (
                <Link
                  href={secondaryCta.href}
                  className='border-2 border-primary text-primary-dark hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-colors text-center'
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Image Section */}
          {hasImage && (
            <div className='relative flex justify-center order-1 lg:order-2 animate-fade-in-up delay-200'>
              <div className='relative'>
                {/* Decorative background blob */}
                <div
                  className='absolute -inset-6 bg-primary/10'
                  style={{
                    borderRadius: '60% 40% 55% 45% / 55% 60% 40% 45%',
                  }}
                />
                {/* Image container with organic shape */}
                <div
                  className='relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 overflow-hidden shadow-xl'
                  style={{
                    borderRadius: '55% 45% 50% 50% / 50% 55% 45% 50%',
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt='Beate Ilg-Wohnhaas'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
                {/* Small decorative accent */}
                <div
                  className='absolute -bottom-3 -right-3 w-20 h-20 bg-primary/20'
                  style={{
                    borderRadius: '40% 60% 55% 45% / 60% 45% 55% 40%',
                  }}
                />
                {/* Name and role badge */}
                <div
                  className='absolute -bottom-4 -left-4 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md shadow-xl px-6 py-4'
                  style={{
                    borderRadius: '9999px',
                    boxShadow: '0 8px 32px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)',
                  }}
                >
                  <p className='font-display font-light text-charcoal text-base sm:text-lg'>
                    {personName}
                  </p>
                  <p className='text-primary-dark text-xs sm:text-sm'>
                    {personRole}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <svg
          className='w-6 h-6 text-primary-dark'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  )
}

