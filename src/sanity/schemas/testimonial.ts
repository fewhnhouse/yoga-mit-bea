import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
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
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "First name of the person",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Related Service",
      type: "reference",
      to: [{ type: "service" }],
      description: "Which service is this testimonial about? (optional)",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage carousel",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first in the carousel",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote",
      site: "site",
    },
    prepare(selection) {
      const { title, subtitle, site } = selection;
      const siteEmojis: Record<string, string> = {
        yoga: "🧘",
        therapie: "💆",
        both: "🔄",
      };
      const siteEmoji = site ? siteEmojis[site] || "" : "";
      const quotePreview = subtitle 
        ? subtitle.substring(0, 80) + (subtitle.length > 80 ? "..." : "")
        : "";
      
      return {
        title: `${siteEmoji} ${title || "Unnamed"}`,
        subtitle: quotePreview,
      };
    },
  },
});
