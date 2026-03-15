import Image from 'next/image'

interface ImageHeroLogoSectionProps {
  imageUrl?: string
  imageAlt?: string
  logoUrl?: string
}

export default function ImageHeroLogoSection({
  imageUrl,
  imageAlt = '',
  logoUrl,
}: ImageHeroLogoSectionProps) {
  return (
    <section className='w-full h-screen overflow-hidden flex flex-col'>
      <div className='relative w-full flex-[2] min-h-0'>
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={imageAlt || 'Hero image'}
              fill
              priority
              sizes='100vw'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10' />
          </>
        ) : (
          <div className='absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-primary/10' />
        )}
      </div>

      <div className='relative flex-[1] min-h-0 overflow-hidden bg-gradient-to-b from-cream/60 to-warm-white flex items-center justify-center px-6'>
        {/* Decorative moving bubbles */}
        <div className='absolute -left-10 top-8 w-40 h-40 bg-primary/8 organic-blob animate-float' />
        <div className='absolute right-[12%] bottom-4 w-56 h-56 bg-primary/6 organic-blob-2 animate-breathe' />
        <div className='absolute left-1/2 -translate-x-1/2 top-6 w-80 h-24 bg-primary/6 rounded-full blur-3xl' />

        {logoUrl ? (
          <div className='relative z-10 w-full max-w-[460px] h-24 md:h-[7.5rem]'>
            <Image
              src={logoUrl}
              alt='Logo'
              fill
              sizes='(max-width: 768px) 72vw, 460px'
              className='object-contain'
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}
