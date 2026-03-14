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
    defineField({
      name: "aspectRatio",
      title: "Image Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "Portrait (4:5)", value: "4/5" },
          { title: "Tall Portrait (3:4)", value: "3/4" },
          { title: "Landscape (4:3)", value: "4/3" },
        ],
      },
      initialValue: "4/5",
    }),

    // Text content
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
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Optional italic quote text below title",
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
      name: "headingLevel",
      title: "Heading Level",
      type: "string",
      options: {
        list: [
          { title: "H1 (page title)", value: "h1" },
          { title: "H2 (section)", value: "h2" },
        ],
        layout: "radio",
      },
      initialValue: "h2",
      description: "Use H1 for page hero sections",
    }),

    // Section styling
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Light (warm-white)", value: "light" },
          { title: "Cream", value: "cream" },
          { title: "Gradient", value: "gradient" },
          { title: "Pattern", value: "pattern" },
        ],
      },
      initialValue: "pattern",
    }),
    defineField({
      name: "decorativeBlobs",
      title: "Show Decorative Blobs",
      type: "boolean",
      description: "Display organic blob shapes behind image",
      initialValue: true,
    }),
    defineField({
      name: "padding",
      title: "Padding Style",
      type: "string",
      options: {
        list: [
          { title: "Hero (larger top padding)", value: "hero" },
          { title: "Section (standard)", value: "section" },
        ],
        layout: "radio",
      },
      initialValue: "section",
    }),
  ],
  preview: {
    select: {
      title: "title",
      label: "label",
      media: "image",
    },
    prepare({ title, label, media }) {
      return {
        title: title || "Image + Text Section",
        subtitle: label || "Two-column layout",
        media,
      };
    },
  },
});
