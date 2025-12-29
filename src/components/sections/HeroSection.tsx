import Link from 'next/link'
import LotusIcon from '@/components/icons/LotusIcon'

interface HeroSectionProps {
  title?: string
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
}

export default function HeroSection({
  title,
  tagline,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-primary/10' />

      {/* Decorative Elements */}
      <div
        className='absolute top-20 left-10 w-64 h-64 bg-primary/5 organic-blob animate-float'
      />
      <div className='absolute bottom-20 right-10 w-80 h-80 bg-primary/5 organic-blob-2 animate-float delay-300' />
      <div className='absolute top-1/3 right-1/4 w-40 h-40 bg-blush/20 rounded-full animate-breathe' />

      {/* Content */}
      <div className='relative container mx-auto px-6 pt-32 pb-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex justify-center mb-8'>
            <LotusIcon className='w-16 h-16 text-primary-dark lotus-animate' />
          </div>

          {title && (
            <h1 className='font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-charcoal mb-6 animate-fade-in-up'>
              {title}
            </h1>
          )}

          {tagline && (
            <p
              className='font-display text-xl md:text-2xl text-primary-dark italic max-w-2xl mx-auto mb-6 animate-fade-in-up delay-100'
            >
              &bdquo;{tagline}&ldquo;
            </p>
          )}

          {subtitle && (
            <p className='font-body text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200'>
              {subtitle}
            </p>
          )}

          <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300'>
            {primaryCta?.text && primaryCta?.href && (
              <Link
                href={primaryCta.href}
                className='bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-full font-medium transition-colors'
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta?.text && secondaryCta?.href && (
              <Link
                href={secondaryCta.href}
                className='border-2 border-primary text-primary-dark hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-colors'
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
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

