import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "site",
      title: "Belongs to Site",
      type: "string",
      options: {
        list: [
          { title: "Yoga only", value: "yoga" },
          { title: "Therapie only", value: "therapie" },
          { title: "Both sites", value: "both" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "yoga",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: 'e.g., "Yoga für dich" or "Körperliche Entspannung"',
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief description shown in cards/previews",
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description shown on the service page",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Lotus", value: "lotus" },
          { title: "Group", value: "group" },
          { title: "Calendar", value: "calendar" },
          { title: "Path", value: "path" },
          { title: "Hands", value: "hands" },
          { title: "Wind", value: "wind" },
          { title: "Sound", value: "sound" },
          { title: "Video", value: "video" },
        ],
      },
      description: "Icon shown in service cards",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features/highlights shown with checkmarks",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g., "60 Minuten" or "Termine nach Vereinbarung"',
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "string",
      description: 'e.g., "8er Karte: 110€" or "60€ pro Stunde"',
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Anfragen",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/kontakt",
    }),
    defineField({
      name: "locations",
      title: "Available Locations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "location" }] }],
      description: "Where this service is offered",
    }),
    defineField({
      name: "events",
      title: "Related Events",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
      description: "Events associated with this service (e.g., Yogatag, Yogawochenende)",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
      description: "Where the image appears in the section layout",
    }),
    defineField({
      name: "sectionBackground",
      title: "Section Background",
      type: "string",
      options: {
        list: [
          { title: "Light (warm-white)", value: "light" },
          { title: "Cream", value: "cream" },
        ],
        layout: "radio",
      },
      initialValue: "light",
      description: "Background color for the section",
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Optional badge shown on the image (e.g., 'Einzelstunden', 'Lonetal')",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "site",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const siteLabels: Record<string, string> = {
        yoga: "🧘 Yoga",
        therapie: "💆 Therapie",
        both: "🔄 Both",
      };
      const siteLabel = subtitle ? siteLabels[subtitle] || subtitle : "";
      
      return {
        title: title || "Untitled Service",
        subtitle: siteLabel,
        media,
      };
    },
  },
});
