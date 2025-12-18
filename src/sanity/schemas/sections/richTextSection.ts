import { defineType, defineField } from "sanity";

/**
 * RichTextSection - Portable text content for generic pages
 * Supports headings, paragraphs, lists, images, etc.
 */
export default defineType({
  name: "richTextSection",
  title: "Rich Text Section",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Light (warm-white)", value: "light" },
          { title: "Cream", value: "cream" },
          { title: "Transparent", value: "transparent" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),
    defineField({
      name: "maxWidth",
      title: "Content Width",
      type: "string",
      options: {
        list: [
          { title: "Narrow (prose)", value: "narrow" },
          { title: "Medium", value: "medium" },
          { title: "Wide", value: "wide" },
        ],
      },
      initialValue: "narrow",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Rich Text Section",
        subtitle: "Portable text content",
      };
    },
  },
});

