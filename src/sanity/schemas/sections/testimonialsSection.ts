import { defineType, defineField } from "sanity";

/**
 * TestimonialsSection - Carousel of testimonials
 * Auto-fetches featured testimonials from Sanity
 */
export default defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "Teilnehmerstimmen",
      description: "Small uppercase text above the title",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Was andere sagen",
    }),
    defineField({
      name: "showTestimonialsFrom",
      title: "Show Testimonials From",
      type: "string",
      options: {
        list: [
          { title: "Current site (automatic)", value: "current" },
          { title: "Yoga only", value: "yoga" },
          { title: "Therapie only", value: "therapie" },
          { title: "Both sites", value: "both" },
        ],
      },
      initialValue: "current",
      description: "Which testimonials to display",
    }),
    defineField({
      name: "featuredOnly",
      title: "Featured Only",
      type: "boolean",
      description: "Only show testimonials marked as featured",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Testimonials",
        subtitle: "Testimonials carousel",
      };
    },
  },
});

