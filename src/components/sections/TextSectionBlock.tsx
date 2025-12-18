'use client'

import Link from 'next/link'
import TextSection from '@/components/TextSection'
import SectionHeader from '@/components/SectionHeader'
import { useSite } from '@/context/SiteContext'

interface TextSectionBlockProps {
  label?: string
  title: string
  description?: string[]
  cta?: {
    text?: string
    href?: string
  }
  align?: 'left' | 'center'
  background?: 'transparent' | 'light' | 'cream' | 'gradient' | 'primary'
  padding?: 'hero' | 'section'
}

export default function TextSectionBlock({
  label,
  title,
  description,
  cta,
  align = 'left',
  background = 'gradient',
  padding = 'hero',
}: TextSectionBlockProps) {
  const { isYoga } = useSite()

  // Background classes
  const bgClasses: Record<string, string> = {
    transparent: '',
    light: 'bg-warm-white',
    cream: 'bg-cream',
    gradient: isYoga
      ? 'bg-gradient-to-br from-cream via-warm-white to-sage/10'
      : 'bg-gradient-to-br from-blush/30 via-warm-white to-terracotta/10',
    primary: isYoga ? 'bg-sage' : 'bg-terracotta',
  }

  // Check if we need white text (for primary background)
  const isPrimaryBg = background === 'primary'

  // Padding classes
  const paddingClasses = padding === 'hero' ? 'pt-32 pb-20' : 'py-24'

  // Decorative blob classes
  const blobClass1 = isYoga ? 'bg-sage/5' : 'bg-terracotta/5'
  const blobClass2 = 'bg-blush/10'

  // Alignment classes
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <section
      className={`relative ${paddingClasses} ${bgClasses[background]} overflow-hidden`}
    >
      {/* Decorative Elements */}
      {background === 'gradient' && (
        <>
          <div
            className={`absolute top-20 right-10 w-64 h-64 ${blobClass1} organic-blob animate-float`}
          />
          <div
            className={`absolute bottom-10 left-10 w-48 h-48 ${blobClass2} organic-blob-2 animate-breathe`}
          />
        </>
      )}

      <div className='container mx-auto px-6 relative'>
        {isPrimaryBg ? (
          // Primary background: render with white text
          <div className={`max-w-3xl ${alignClass}`}>
            <SectionHeader
              label={label || ''}
              title={title}
              theme='light'
              align={align}
            />
            {description && description.length > 0 && (
              <div className='space-y-4'>
                {description.map((paragraph, index) => (
                  <p
                    key={index}
                    className='text-white/90 text-lg leading-relaxed'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {cta?.text && cta?.href && (
              <Link
                href={cta.href}
                className='inline-flex items-center gap-2 mt-8 text-white hover:text-white/80 font-medium transition-colors group'
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
        ) : (
          // Default: use TextSection component
          <TextSection
            label={label || ''}
            title={title}
            description={description || []}
            cta={cta?.text && cta?.href ? { text: cta.text, href: cta.href } : undefined}
            theme={isYoga ? 'yoga' : 'therapie'}
            align={align}
          />
        )}
      </div>
    </section>
  )
}

