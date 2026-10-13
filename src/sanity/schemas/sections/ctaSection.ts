import { defineType, defineField } from "sanity";

/**
 * CTASection - Call-to-action block with solid/light bg, buttons, quotes
 * Maps to CTASection.tsx component
 */
export default defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctas",
      title: "Call to Action Buttons",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "CTA Section",
        subtitle: "Call to action",
      };
    },
  },
});

