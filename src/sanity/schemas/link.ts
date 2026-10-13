import { defineType, defineField } from "sanity";

/** Pages that live in code (not in Sanity) and can still be linked to. */
export const CODE_ROUTES = [
  { title: "Kontakt", value: "kontakt" },
  { title: "Impressum", value: "impressum" },
  { title: "Datenschutz", value: "datenschutz" },
];

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Link Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => Boolean(parent?.route),
    }),
    defineField({
      name: "route",
      title: "Fixed Page",
      type: "string",
      options: { list: CODE_ROUTES },
      hidden: ({ parent }) => Boolean(parent?.page),
    }),
  ],
  validation: (Rule) =>
    Rule.custom((value: { page?: unknown; route?: string } | undefined) =>
      !value || Boolean(value.page) !== Boolean(value.route)
        ? true
        : "Choose either a page or a fixed page"
    ),
  preview: {
    select: { title: "text", page: "page.title", route: "route" },
    prepare({ title, page, route }) {
      return { title: title || "Link", subtitle: page || (route && `/${route}`) };
    },
  },
});
