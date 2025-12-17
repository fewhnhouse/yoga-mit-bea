import LotusIcon from "@/components/icons/LotusIcon";
import TextSection from "@/components/TextSection";
import CTASection from "@/components/CTASection";
import IconCard from "@/components/IconCard";
import ServiceSection from "@/components/ServiceSection";
import ServiceIcon from "@/components/ServiceIcon";
import type { TherapiePageDataQueryResult, ServiceFromQuery } from "@/sanity/types";

interface TherapieContentProps {
  initialData: NonNullable<TherapiePageDataQueryResult>
}

// Helper to get a large fallback icon for services without images
function getFallbackIcon(service: ServiceFromQuery) {
  const iconClass = "w-24 h-24 text-terracotta/30";
  
  // Use the icon field if available
  if (service.icon) {
    return <ServiceIcon icon={service.icon} className={iconClass} />;
  }
  
  // Fallback based on slug
  const slug = service.slug
  switch (slug) {
    case "massage":
    case "therapeutische-massage":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      );
    case "atemtherapie":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
        </svg>
      );
    case "klangschalen":
    case "klangschalentherapie":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    default:
      return <LotusIcon className={iconClass} />;
  }
}

export default function TherapieContent({ initialData }: TherapieContentProps) {
  const services = initialData.services;
  
  // Sort services by their order field
  const sortedServices = [...services].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blush/30 via-warm-white to-terracotta/10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-terracotta/5 organic-blob animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-sage/10 organic-blob-2 animate-breathe" />

        <div className="container mx-auto px-6 relative">
          <TextSection
            label="Therapeutische Angebote"
            title="Therapie mit Bea"
            description={[
              "Heilung geschieht auf vielen Ebenen. Meine therapeutischen Angebote unterstützen dich dabei, körperliche Verspannungen zu lösen, emotionale Balance zu finden und neue Kraft zu schöpfen.",
              "Jede Behandlung ist ein Raum für dich – achtsam, individuell und heilsam."
            ]}
            theme="therapie"
          />
        </div>
      </section>

      {/* Service Sections - Dynamically Rendered */}
      {sortedServices.map((service) => (
        <ServiceSection
          key={service._id}
          service={service}
          theme="therapie"
          background={service.sectionBackground || 'light'}
          imagePosition={service.imagePosition || 'left'}
          badge={service.badge || service.duration}
          id={service.slug}
          fallbackIcon={!service.imageUrl ? getFallbackIcon(service) : undefined}
        />
      ))}

      {/* Info Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <IconCard
              icon={
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Flexible Termine"
              description="Termine nach individueller Vereinbarung, angepasst an deinen Alltag."
              theme="therapie"
              variant="flat"
            />

            <IconCard
              icon={
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Erstgespräch kostenfrei"
              description="In einem kurzen Vorgespräch klären wir deine Bedürfnisse und Wünsche."
              theme="therapie"
              variant="flat"
            />

            <IconCard
              icon={
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Individuelle Betreuung"
              description="Jede Behandlung wird auf deine persönlichen Bedürfnisse abgestimmt."
              theme="therapie"
              variant="flat"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Bereit für deine Behandlung?"
        description="Nimm Kontakt auf und wir finden gemeinsam die passende Therapie für dich. Ich freue mich auf deine Nachricht."
        cta={{ text: "Jetzt Termin anfragen", href: "/kontakt" }}
        theme="therapie"
        variant="solid"
      />
    </>
  );
}
