import { defineType, defineField } from "sanity";

/**
 * ServiceSection - Displays a single service with its details
 * References a service document and allows customization of display options
 */
export default defineType({
  name: "serviceSection",
  title: "Service Section",
  type: "object",
  fields: [
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule) => Rule.required(),
      description: "Select the service to display",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Cream", value: "cream" },
        ],
        layout: "radio",
      },
      initialValue: "light",
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
      description: "Override the service's default image position",
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Override the service's default badge (leave empty to use service default)",
    }),
    defineField({
      name: "customId",
      title: "Custom Section ID",
      type: "string",
      description: "Override the anchor ID (defaults to service slug)",
    }),
  ],
  preview: {
    select: {
      serviceTitle: "service.title",
      background: "background",
      imageUrl: "service.image.asset.url",
    },
    prepare({ serviceTitle, background, imageUrl }) {
      return {
        title: serviceTitle || "No service selected",
        subtitle: `Service Section (${background || "light"} background)`,
        media: imageUrl ? undefined : undefined,
      };
    },
  },
});
