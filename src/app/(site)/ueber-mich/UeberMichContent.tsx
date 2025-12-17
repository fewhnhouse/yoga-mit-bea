'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import LotusIcon from '@/components/icons/LotusIcon'
import IconCard from '@/components/IconCard'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import ServiceIcon from '@/components/ServiceIcon'
import { useSite } from '@/context/SiteContext'
import type { AboutPageData } from '@/sanity/types'

interface UeberMichContentProps {
  initialData: AboutPageData
}

export default function UeberMichContent({
  initialData,
}: UeberMichContentProps) {
  const { currentSite, isYoga } = useSite()

  // Get data from Sanity
  const about = initialData?.about
  const services = initialData?.services || []
  const siteContent = isYoga ? about?.yogaContent : about?.therapieContent

  const name = about?.name || ''
  const photoUrl = about?.photoUrl || ''

  const intro = siteContent?.intro || ''
  const philosophyHeading = siteContent?.philosophyHeading || ''
  const philosophy = siteContent?.philosophy || []
  const approach = siteContent?.approach || []

  // Styling classes based on site
  const primaryColorClass = isYoga ? 'text-sage-dark' : 'text-terracotta'
  const primaryBgClass = isYoga ? 'bg-sage' : 'bg-terracotta'

  // Build service href based on slug
  const getServiceHref = (slug: string) => {
    const basePath = isYoga ? '/yoga' : '/therapie'
    // Extract anchor from slug (e.g., "yoga-individuell" -> "individuell")
    const anchor = slug.replace(/^(yoga-|therapie-)/, '')
    return `${basePath}#${anchor}`
  }
  const gradientClass = isYoga
    ? 'from-cream via-warm-white to-blush/20'
    : 'from-blush/30 via-warm-white to-terracotta/10'

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative pt-32 pb-20 bg-gradient-to-br ${gradientClass} overflow-hidden`}
      >
        <div
          className={`absolute top-20 right-10 w-64 h-64 ${isYoga ? 'bg-sage/5' : 'bg-terracotta/5'} organic-blob animate-float`}
        />
        <div
          className={`absolute bottom-10 left-10 w-48 h-48 ${isYoga ? 'bg-terracotta/5' : 'bg-sage/5'} organic-blob-2 animate-breathe`}
        />

        <div className='container mx-auto px-6 relative'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Image Side */}
            <div className='relative order-2 lg:order-1'>
              <div className='aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative'>
                <Image
                  src={photoUrl}
                  alt={`${name} - Yoga und Therapie`}
                  fill
                  className='object-cover rounded-2xl'
                  priority
                />
              </div>
              <div
                className={`absolute -bottom-6 -left-6 w-48 h-48 ${isYoga ? 'bg-sage/10' : 'bg-terracotta/10'} organic-blob -z-10`}
              />
              <div
                className={`absolute -top-6 -right-6 w-32 h-32 ${isYoga ? 'bg-terracotta/10' : 'bg-sage/10'} organic-blob-2 -z-10`}
              />
            </div>

            {/* Text Side */}
            <div className='order-1 lg:order-2'>
              <SectionHeader
                label='Über Mich'
                title={name}
                theme={isYoga ? 'yoga' : 'therapie'}
                as='h1'
              />
              <p
                className={`font-display text-xl ${primaryColorClass} italic mb-6`}
              >
                &bdquo;{currentSite.tagline}&ldquo;
              </p>
              <div className='space-y-4 text-charcoal-light leading-relaxed'>
                <p>{intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`py-24 ${primaryBgClass}`}>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mx-auto text-center text-white'>
            <h2 className='font-display text-3xl md:text-4xl font-semibold mb-6'>
              {philosophyHeading}
            </h2>
            <div className='w-16 h-0.5 bg-white/30 mx-auto mb-8' />
            {philosophy.length > 0 && (
              <div className='text-white/90 text-lg leading-relaxed mb-6 prose prose-invert prose-lg mx-auto [&>p]:mb-4'>
                <PortableText value={philosophy} />
              </div>
            )}
            {approach.length > 0 && (
              <div className='text-white/80 leading-relaxed mb-6 prose prose-invert mx-auto [&>p]:mb-4'>
                <PortableText value={approach} />
              </div>
            )}
            <p className='text-white/80 leading-relaxed'>
              Jeder Mensch ist einzigartig, und so ist auch jeder Weg
              individuell. Ich begleite dich gerne auf deinem persönlichen Pfad.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className='py-24 bg-warm-white'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-16'>
              <SectionHeader
                label='Meine Arbeitsweise'
                title='Was dich bei mir erwartet'
                theme={isYoga ? 'yoga' : 'therapie'}
                align='center'
              />
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <IconCard
                icon={
                  <svg
                    className={`w-8 h-8 ${primaryColorClass}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                }
                title='Achtsame Begleitung'
                description='Ich nehme mir Zeit für dich und gehe individuell auf deine Bedürfnisse ein.'
                theme={isYoga ? 'yoga' : 'therapie'}
                variant='flat'
              />

              <IconCard
                icon={
                  <svg
                    className={`w-8 h-8 ${primaryColorClass}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                }
                title='Raum und Zeit'
                description={
                  isYoga
                    ? 'In meinen Stunden herrscht kein Druck – du darfst sein, wie du bist.'
                    : 'Jede Behandlung bekommt die Zeit, die sie braucht – ohne Hektik.'
                }
                theme={isYoga ? 'yoga' : 'therapie'}
                variant='flat'
              />

              <IconCard
                icon={<LotusIcon className={`w-8 h-8 ${primaryColorClass}`} />}
                title='Ganzheitlicher Ansatz'
                description={
                  isYoga
                    ? 'Yoga als Verbindung von Körper, Geist und Atem – nicht nur Übungen.'
                    : 'Körper, Geist und Seele als Einheit betrachten und behandeln.'
                }
                theme={isYoga ? 'yoga' : 'therapie'}
                variant='flat'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Overview */}
      <section className='py-24 bg-cream'>
        <div className='container mx-auto px-6'>
          <div className='mb-16'>
            <SectionHeader
              label='Meine Angebote'
              title={
                isYoga ? 'So kannst du mit mir üben' : 'Meine Behandlungen'
              }
              theme={isYoga ? 'yoga' : 'therapie'}
              align='center'
            />
          </div>

          <div
            className={`grid md:grid-cols-2 ${services.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}
          >
            {services.map((service) => (
              <IconCard
                key={service._id}
                icon={
                  <ServiceIcon
                    icon={service.icon}
                    className={`w-10 h-10 ${primaryColorClass} group-hover:scale-110 transition-transform`}
                  />
                }
                title={service.title}
                description={service.shortDescription || ''}
                href={getServiceHref(service.slug)}
                theme={isYoga ? 'yoga' : 'therapie'}
                size='compact'
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title='Lass uns kennenlernen'
        description='Hast du Fragen oder möchtest du mehr über meine Angebote erfahren? Ich freue mich auf deine Nachricht.'
        cta={{ text: 'Kontakt aufnehmen', href: '/kontakt' }}
        theme={isYoga ? 'yoga' : 'therapie'}
        variant='light'
      />
    </>
  )
}
