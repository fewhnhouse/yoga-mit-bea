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
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Button Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Button Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "variant",
              title: "Button Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary (filled)", value: "primary" },
                  { title: "Secondary (outline)", value: "secondary" },
                ],
              },
              initialValue: "primary",
            }),
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "href",
            },
          },
        },
      ],
    }),
    defineField({
      name: "variant",
      title: "Background Variant",
      type: "string",
      options: {
        list: [
          { title: "Solid (colored background)", value: "solid" },
          { title: "Light (gradient background)", value: "light" },
        ],
        layout: "radio",
      },
      initialValue: "solid",
    }),
    defineField({
      name: "isQuote",
      title: "Style as Quote",
      type: "boolean",
      description: "Display with larger italic text styling",
      initialValue: false,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Optional decorative icon above the title",
      options: {
        list: [
          { title: "None", value: "" },
          { title: "Lotus", value: "lotus" },
          { title: "Group", value: "group" },
          { title: "Calendar", value: "calendar" },
          { title: "Path", value: "path" },
          { title: "Hands", value: "hands" },
          { title: "Wind / Breath", value: "wind" },
          { title: "Sound", value: "sound" },
          { title: "Video", value: "video" },
          { title: "Heart", value: "heart" },
          { title: "Clock", value: "clock" },
          { title: "Check", value: "check" },
        ],
      },
    }),
    defineField({
      name: "decorative",
      title: "Show Decorative Elements",
      type: "boolean",
      description: "Display decorative circles in background",
      initialValue: false,
    }),
    defineField({
      name: "padding",
      title: "Vertical Padding",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Large", value: "large" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
  ],
  preview: {
    select: {
      title: "title",
      isQuote: "isQuote",
    },
    prepare({ title, isQuote }) {
      return {
        title: title || "CTA Section",
        subtitle: isQuote ? "Quote style" : "Call to action",
      };
    },
  },
});

