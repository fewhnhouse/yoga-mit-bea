'use client'

import Image from 'next/image'

interface ImageHeroLogoSectionProps {
  imageUrl?: string
  imageAlt?: string
  logoUrl?: string
}

export default function ImageHeroLogoSection({
  imageUrl,
  imageAlt = '',
}: ImageHeroLogoSectionProps) {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt || 'Hero image'}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
      ) : (
        <div className='absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-primary/10' />
      )}

      {/* Scroll hint — click to advance one viewport */}
      <button
        type='button'
        onClick={(e) => {
          const section = e.currentTarget.closest('section')
          const next = section?.nextElementSibling
          if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
          }
        }}
        aria-label='Mehr entdecken'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 cursor-pointer rounded-full bg-warm-white/80 backdrop-blur-md shadow-md px-4 py-2 transition-colors hover:bg-warm-white/90'
      >
        <span className='font-body text-xs tracking-wide text-primary-dark'>
          Mehr entdecken
        </span>
        <svg
          className='w-4 h-4 text-primary-dark animate-bounce'
          fill='none'
          stroke='currentColor'
          strokeWidth={1.5}
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m19.5 8.25-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
    </section>
  )
}
