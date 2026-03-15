import { defineType, defineField } from "sanity";

/**
 * ImageHeroLogoSection - Full-width hero image with centered logo area below
 */
export default defineType({
  name: "imageHeroLogoSection",
  title: "Image Hero + Logo",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageAlt",
      title: "Hero Image Alt Text",
      type: "string",
      description: "Accessibility description of the hero image",
    }),
    defineField({
      name: "logo",
      title: "Logo (Centered Below Image)",
      type: "image",
      description: "Optional logo shown in the centered space below the hero image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: "image",
      logo: "logo",
    },
    prepare({ media, logo }) {
      return {
        title: "Image Hero + Logo",
        subtitle: `Fixed full-screen layout${logo ? " • with logo" : " • no logo"}`,
        media,
      };
    },
  },
});
