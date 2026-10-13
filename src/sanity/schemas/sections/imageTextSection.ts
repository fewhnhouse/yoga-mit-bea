import { defineType, defineField } from "sanity";

/**
 * ImageTextSection - Two-column image + text with decorative blobs
 * Unifies About Preview and Hero with image patterns
 * Uses TextSection internally for text content
 */
export default defineType({
  name: "imageTextSection",
  title: "Image + Text Section",
  type: "object",
  fields: [
    // Image configuration
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
      description: "Accessibility description of the image",
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
    }),

    // Text content
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
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              defineField({
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  }),
                ],
              }),
              defineField({
                name: "textColor",
                title: "Text Color",
                type: "object",
                fields: [
                  defineField({
                    name: "hex",
                    title: "Hex Color",
                    type: "string",
                    description: "Use a hex color like #8B5E3C",
                    validation: (Rule) =>
                      Rule.regex(
                        /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
                        { name: "hex color", invert: false }
                      ).error("Please enter a valid hex color (e.g. #8B5E3C)"),
                  }),
                ],
              }),
            ],
          },
        },
      ],
      description: "Rich text description with formatting, links, and lists",
    }),
    defineField({
      name: "cta",
      title: "Call to Action Link",
      type: "link",
    }),

    // Section styling
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Pattern", value: "pattern" },
          { title: "Light (warm-white)", value: "light" },
        ],
      },
      initialValue: "pattern",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Image + Text Section",
        subtitle: "Two-column layout",
        media,
      };
    },
  },
});
