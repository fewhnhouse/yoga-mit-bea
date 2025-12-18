import { defineType, defineField } from "sanity";

/**
 * TextSection - Page intro with label, title, description, optional link CTA
 * Maps to TextSection.tsx component
 */
export default defineType({
  name: "textSection",
  title: "Text Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Small uppercase text above the title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text", rows: 3 }],
      description: "One or more paragraphs of text",
    }),
    defineField({
      name: "cta",
      title: "Call to Action Link",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Link Text",
          type: "string",
        }),
        defineField({
          name: "href",
          title: "Link URL",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "align",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Transparent", value: "transparent" },
          { title: "Light (warm-white)", value: "light" },
          { title: "Cream", value: "cream" },
          { title: "Gradient", value: "gradient" },
          { title: "Primary (sage/terracotta with white text)", value: "primary" },
        ],
      },
      initialValue: "gradient",
    }),
    defineField({
      name: "padding",
      title: "Padding",
      type: "string",
      options: {
        list: [
          { title: "Hero (larger top padding)", value: "hero" },
          { title: "Section (standard)", value: "section" },
        ],
        layout: "radio",
      },
      initialValue: "hero",
    }),
  ],
  preview: {
    select: {
      title: "title",
      label: "label",
    },
    prepare({ title, label }) {
      return {
        title: title || "Text Section",
        subtitle: label || "Text content section",
      };
    },
  },
});

