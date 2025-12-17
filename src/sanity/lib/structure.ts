import type { StructureResolver } from "sanity/structure";

// Singleton document IDs
export const SINGLETON_IDS = {
  siteSettingsYoga: "siteSettings-yoga",
  siteSettingsTherapie: "siteSettings-therapie",
  aboutBea: "aboutBea",
  homepageYoga: "homepage-yoga",
  homepageTherapie: "homepage-therapie",
};

// Types that are singletons (shouldn't show in default list)
export const SINGLETON_TYPES = new Set([
  "siteSettings",
  "aboutBea",
  "homepageContent",
]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Site Settings Group
      S.listItem()
        .title("Site Settings")
        .icon(() => "⚙️")
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem()
                .title("🧘 Yoga Site Settings")
                .icon(() => "🧘")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId(SINGLETON_IDS.siteSettingsYoga)
                    .title("Yoga Site Settings")
                ),
              S.listItem()
                .title("💆 Therapie Site Settings")
                .icon(() => "💆")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId(SINGLETON_IDS.siteSettingsTherapie)
                    .title("Therapie Site Settings")
                ),
            ])
        ),

      S.divider(),

      // About Bea (Singleton)
      S.listItem()
        .title("About Bea")
        .icon(() => "👤")
        .child(
          S.document()
            .schemaType("aboutBea")
            .documentId(SINGLETON_IDS.aboutBea)
            .title("About Bea")
        ),

      // Homepage Content
      S.listItem()
        .title("Homepage Content")
        .icon(() => "🏠")
        .child(
          S.list()
            .title("Homepage Content")
            .items([
              S.listItem()
                .title("🧘 Yoga Homepage")
                .icon(() => "🧘")
                .child(
                  S.document()
                    .schemaType("homepageContent")
                    .documentId(SINGLETON_IDS.homepageYoga)
                    .title("Yoga Homepage")
                ),
              S.listItem()
                .title("💆 Therapie Homepage")
                .icon(() => "💆")
                .child(
                  S.document()
                    .schemaType("homepageContent")
                    .documentId(SINGLETON_IDS.homepageTherapie)
                    .title("Therapie Homepage")
                ),
            ])
        ),

      S.divider(),

      // Services
      S.listItem()
        .title("Services")
        .icon(() => "✨")
        .child(
          S.list()
            .title("Services")
            .items([
              S.listItem()
                .title("🧘 Yoga Services")
                .child(
                  S.documentList()
                    .title("Yoga Services")
                    .filter('_type == "service" && site in ["yoga", "both"]')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.listItem()
                .title("💆 Therapie Services")
                .child(
                  S.documentList()
                    .title("Therapie Services")
                    .filter('_type == "service" && site in ["therapie", "both"]')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.divider(),
              S.listItem()
                .title("All Services")
                .child(
                  S.documentList()
                    .title("All Services")
                    .filter('_type == "service"')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
            ])
        ),

      // Locations
      S.listItem()
        .title("Locations")
        .icon(() => "📍")
        .child(
          S.documentList()
            .title("Locations")
            .filter('_type == "location"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),

      // Events
      S.listItem()
        .title("Events")
        .icon(() => "📅")
        .child(
          S.list()
            .title("Events")
            .items([
              S.listItem()
                .title("Upcoming Events")
                .child(
                  S.documentList()
                    .title("Upcoming Events")
                    .filter('_type == "event" && startDate >= now()')
                    .defaultOrdering([{ field: "startDate", direction: "asc" }])
                ),
              S.listItem()
                .title("Past Events")
                .child(
                  S.documentList()
                    .title("Past Events")
                    .filter('_type == "event" && startDate < now()')
                    .defaultOrdering([{ field: "startDate", direction: "desc" }])
                ),
              S.divider(),
              S.listItem()
                .title("All Events")
                .child(
                  S.documentList()
                    .title("All Events")
                    .filter('_type == "event"')
                    .defaultOrdering([{ field: "startDate", direction: "desc" }])
                ),
            ])
        ),

      S.divider(),

      // Testimonials
      S.listItem()
        .title("Testimonials")
        .icon(() => "💬")
        .child(
          S.list()
            .title("Testimonials")
            .items([
              S.listItem()
                .title("🧘 Yoga Testimonials")
                .child(
                  S.documentList()
                    .title("Yoga Testimonials")
                    .filter('_type == "testimonial" && site in ["yoga", "both"]')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.listItem()
                .title("💆 Therapie Testimonials")
                .child(
                  S.documentList()
                    .title("Therapie Testimonials")
                    .filter('_type == "testimonial" && site in ["therapie", "both"]')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.divider(),
              S.listItem()
                .title("Featured Testimonials")
                .child(
                  S.documentList()
                    .title("Featured Testimonials")
                    .filter('_type == "testimonial" && featured == true')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
              S.listItem()
                .title("All Testimonials")
                .child(
                  S.documentList()
                    .title("All Testimonials")
                    .filter('_type == "testimonial"')
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                ),
            ])
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(() => "📄")
        .child(
          S.documentList()
            .title("Pages")
            .filter('_type == "page"')
        ),
    ]);
