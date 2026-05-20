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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Override the service subtitle (leave empty to use the service default)",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Override the service title (leave empty to use the service default)",
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
      title: "title",
      serviceTitle: "service.title",
      background: "background",
      imageUrl: "service.image.asset.url",
    },
    prepare({ title, serviceTitle, background, imageUrl }) {
      return {
        title: title || serviceTitle || "No service selected",
        subtitle: `Service Section (${background || "light"} background)`,
        media: imageUrl ? undefined : undefined,
      };
    },
  },
});
