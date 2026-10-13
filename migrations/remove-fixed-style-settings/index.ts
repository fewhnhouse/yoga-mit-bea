import { at, defineMigration, set, unset } from "sanity/migrate";
import type { NodePatch } from "sanity/migrate";

const SECTION_FIELDS_TO_DROP: Record<string, string[]> = {
  cardsGridSection: ["background"],
  serviceSection: ["background"],
  imageTextSection: ["aspectRatio"],
  ctaSection: ["variant", "isQuote", "decorative", "padding"],
};

type Section = { _type: string; [field: string]: unknown };

export default defineMigration({
  title: "Remove style settings that are now fixed in the design, and siteSettings.primaryColor",
  documentTypes: ["page", "siteSettings"],
  migrate: {
    document(doc) {
      const patches: NodePatch[] = [];
      if (doc._type === "siteSettings" && "primaryColor" in doc) {
        patches.push(at("primaryColor", unset()));
      }
      if (doc._type === "page" && Array.isArray(doc.sections)) {
        const sections = (doc.sections as Section[]).map((section) => {
          const next = { ...section };
          for (const field of SECTION_FIELDS_TO_DROP[section._type] ?? []) delete next[field];
          return next;
        });
        if (JSON.stringify(sections) !== JSON.stringify(doc.sections)) {
          patches.push(at("sections", set(sections)));
        }
      }
      return patches;
    },
  },
});
