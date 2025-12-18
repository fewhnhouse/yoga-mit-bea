import { defineType, defineField } from "sanity";

/**
 * HeroSection - Full homepage hero with decorative blobs, site name, tagline, dual CTAs
 */
export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading (e.g., 'Yoga und Therapie mit Bea')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Italic quote displayed below the title",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "Additional text below the tagline",
    }),
    defineField({
      name: "primaryCta",
      title: "Primary Button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          initialValue: "Angebote entdecken",
        }),
        defineField({
          name: "href",
          title: "Button Link",
          type: "string",
          initialValue: "/yoga",
        }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary Button",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          initialValue: "Kontakt aufnehmen",
        }),
        defineField({
          name: "href",
          title: "Button Link",
          type: "string",
          initialValue: "/kontakt",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      tagline: "tagline",
    },
    prepare({ title, tagline }) {
      return {
        title: title || "Hero Section",
        subtitle: tagline || "Homepage hero",
      };
    },
  },
});

