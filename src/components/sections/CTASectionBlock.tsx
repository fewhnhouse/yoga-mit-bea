import Link from 'next/link'

interface CTAButton {
  _key?: string
  text?: string | null
  href?: string | null
}

interface CTASectionBlockProps {
  title: string
  description: string
  ctas?: CTAButton[]
}

export default function CTASectionBlock({
  title,
  description,
  ctas = [],
}: CTASectionBlockProps) {
  const buttons = ctas.filter(
    (cta): cta is { _key?: string; text: string; href: string } => Boolean(cta.text && cta.href)
  )

  return (
    <section className='py-20 bg-primary relative overflow-hidden'>
      <div className='container mx-auto px-6 relative'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='font-display text-3xl md:text-4xl font-light mb-6 text-white'>
            {title}
          </h2>
          <p className='text-lg mb-8 max-w-2xl mx-auto text-white/80'>
            {description}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            {buttons.map((button) => (
              <Link
                key={button._key ?? button.href}
                href={button.href}
                className='bg-white text-primary-dark hover:bg-cream px-8 py-4 rounded-full font-medium transition-colors inline-block'
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
