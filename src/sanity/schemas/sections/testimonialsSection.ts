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
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Was andere sagen",
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

