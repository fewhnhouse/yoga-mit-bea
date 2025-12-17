import TextSection from '@/components/TextSection'
import CTASection from '@/components/CTASection'
import ServiceSection from '@/components/ServiceSection'
import type { YogaPageData } from '@/sanity/types'

interface YogaContentProps {
  initialData: YogaPageData
}

export default function YogaContent({ initialData }: YogaContentProps) {
  const { services, locations } = initialData

  // Sort services by their order field or maintain original order
  const sortedServices = [...services].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  )

  return (
    <>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-sage/10 overflow-hidden'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-sage/5 organic-blob animate-float' />
        <div className='absolute bottom-10 left-10 w-48 h-48 bg-blush/10 organic-blob-2 animate-breathe' />

        <div className='container mx-auto px-6 relative'>
          <TextSection
            label='Angebote'
            title='Yoga mit Bea'
            description={[
              'Mein Verständnis von Yoga geht über die körperliche Praxis hinaus. Yoga ist für mich ein Weg der Selbsterfahrung – durch Yoga gehst du nur auf dich selbst zu.',
              'Entdecke meine verschiedenen Angebote und finde den Weg, der zu dir passt.',
            ]}
            theme='yoga'
          />
        </div>
      </section>

      {/* Service Sections - Dynamically Rendered */}
      {sortedServices.map((service) => {
        // Use locations layout if the service has locations attached
        const hasLocations = service.locations && service.locations.length > 0

        return (
          <ServiceSection
            key={service._id}
            service={service}
            locations={hasLocations ? locations : undefined}
            theme='yoga'
            background={service.sectionBackground || 'light'}
            imagePosition={service.imagePosition || 'left'}
            badge={service.badge}
            id={service.slug}
          />
        )
      })}

      {/* CTA Section */}
      <CTASection
        title='Finde deinen Yoga-Weg'
        description='Hast du Fragen zu meinen Angeboten? Möchtest du herausfinden, welches Format am besten zu dir passt? Ich freue mich auf deine Nachricht.'
        cta={{ text: 'Kontakt aufnehmen', href: '/kontakt' }}
        theme='yoga'
        variant='solid'
      />
    </>
  )
}
