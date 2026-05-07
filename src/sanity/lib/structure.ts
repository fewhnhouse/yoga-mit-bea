import type { StructureResolver } from "sanity/structure";

// Singleton document IDs
export const SINGLETON_IDS = {
  siteSettingsYoga: "siteSettings-yoga",
  siteSettingsPsychotherapie: "siteSettings-therapie",
};

// Types that are singletons (shouldn't show in default list)
export const SINGLETON_TYPES = new Set([
  "siteSettings",
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
                .title("💆 Psychotherapie Site Settings")
                .icon(() => "💆")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId(SINGLETON_IDS.siteSettingsPsychotherapie)
                    .title("Psychotherapie Site Settings")
                ),
            ])
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title("Pages")
        .icon(() => "📄")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("🧘 Yoga Pages")
                .child(
                  S.documentList()
                    .title("Yoga Pages")
                    .filter('_type == "page" && site in ["yoga", "both"]')
                ),
              S.listItem()
                .title("💆 Psychotherapie Pages")
                .child(
                  S.documentList()
                    .title("Psychotherapie Pages")
                    .filter('_type == "page" && site in ["therapie", "both"]')
                ),
              S.divider(),
              S.listItem()
                .title("All Pages")
                .child(
                  S.documentList()
                    .title("All Pages")
                    .filter('_type == "page"')
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
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "title", direction: "asc" },
                    ])
                ),
              S.listItem()
                .title("💆 Psychotherapie Services")
                .child(
                  S.documentList()
                    .title("Psychotherapie Services")
                    .filter('_type == "service" && site in ["therapie", "both"]')
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "title", direction: "asc" },
                    ])
                ),
              S.divider(),
              S.listItem()
                .title("All Services")
                .child(
                  S.documentList()
                    .title("All Services")
                    .filter('_type == "service"')
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "title", direction: "asc" },
                    ])
                ),
            ])
        ),

      // Locations
      S.listItem()
        .title("Locations")
        .icon(() => "📍")
        .child(
          S.list()
            .title("Locations")
            .items([
              S.listItem()
                .title("🧘 Yoga Locations")
                .child(
                  S.documentList()
                    .title("Yoga Locations")
                    .filter('_type == "location" && usedBy in ["yoga", "both"]')
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "name", direction: "asc" },
                    ])
                ),
              S.listItem()
                .title("💆 Psychotherapie Locations")
                .child(
                  S.documentList()
                    .title("Psychotherapie Locations")
                    .filter('_type == "location" && usedBy in ["therapie", "both"]')
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "name", direction: "asc" },
                    ])
                ),
              S.divider(),
              S.listItem()
                .title("All Locations")
                .child(
                  S.documentList()
                    .title("All Locations")
                    .filter('_type == "location"')
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "name", direction: "asc" },
                    ])
                ),
            ])
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
                .title("💆 Psychotherapie Testimonials")
                .child(
                  S.documentList()
                    .title("Psychotherapie Testimonials")
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
    ]);
