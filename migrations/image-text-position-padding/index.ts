import { at, defineMigration, set } from "sanity/migrate";

type Section = { _type: string; [field: string]: unknown };

export default defineMigration({
  title: "Remove imageTextSection padding and decorativeBlobs (now derived from position)",
  documentTypes: ["page"],
  migrate: {
    document(doc) {
      if (!Array.isArray(doc.sections)) return [];
      const sections = (doc.sections as Section[]).map((section) => {
        if (section._type !== "imageTextSection") return section;
        const { padding: _padding, decorativeBlobs: _blobs, ...rest } = section;
        return rest;
      });
      return JSON.stringify(sections) === JSON.stringify(doc.sections)
        ? []
        : [at("sections", set(sections))];
    },
  },
});
