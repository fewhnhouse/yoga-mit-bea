import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "siteId",
      title: "Site",
      type: "string",
      options: {
        list: [
          { title: "Yoga mit Bea", value: "yoga" },
          { title: "Therapie mit Bea", value: "therapie" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Hero Section
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
          description: "Text below the tagline",
        }),
        defineField({
          name: "primaryCtaText",
          title: "Primary Button Text",
          type: "string",
          initialValue: "Angebote entdecken",
        }),
        defineField({
          name: "primaryCtaLink",
          title: "Primary Button Link",
          type: "string",
          initialValue: "/yoga",
        }),
        defineField({
          name: "secondaryCtaText",
          title: "Secondary Button Text",
          type: "string",
          initialValue: "Kontakt aufnehmen",
        }),
        defineField({
          name: "secondaryCtaLink",
          title: "Secondary Button Link",
          type: "string",
          initialValue: "/kontakt",
        }),
      ],
    }),

    // About Preview Section
    defineField({
      name: "aboutPreview",
      title: "About Preview Section",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "paragraph1",
          title: "First Paragraph",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "paragraph2",
          title: "Second Paragraph",
          type: "text",
          rows: 3,
        }),
      ],
    }),

    // Quote Section
    defineField({
      name: "quoteSection",
      title: "Quote Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "quote",
          title: "Quote Text",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "ctaText",
          title: "Button Text",
          type: "string",
        }),
        defineField({
          name: "ctaLink",
          title: "Button Link",
          type: "string",
        }),
      ],
    }),

    // Services Section
    defineField({
      name: "servicesSection",
      title: "Services Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Section Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 2,
        }),
      ],
    }),

    // CTA Section
    defineField({
      name: "ctaSection",
      title: "Call to Action Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "primaryCtaText",
          title: "Primary Button Text",
          type: "string",
        }),
        defineField({
          name: "primaryCtaLink",
          title: "Primary Button Link",
          type: "string",
        }),
        defineField({
          name: "secondaryCtaText",
          title: "Secondary Button Text",
          type: "string",
        }),
        defineField({
          name: "secondaryCtaLink",
          title: "Secondary Button Link",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      siteId: "siteId",
    },
    prepare({ siteId }) {
      const siteName = siteId === "yoga" ? "Yoga mit Bea" : "Therapie mit Bea";
      const emoji = siteId === "yoga" ? "🧘" : "💆";
      return {
        title: `${emoji} Homepage - ${siteName}`,
      };
    },
  },
});

