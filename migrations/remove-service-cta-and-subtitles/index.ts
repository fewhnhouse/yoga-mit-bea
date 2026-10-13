import { at, defineMigration, set, unset } from "sanity/migrate";
import type { NodePatch } from "sanity/migrate";

type Section = { _type: string; subtitle?: unknown };

export default defineMigration({
  title: "Remove the never-rendered service CTA and subtitle fields",
  documentTypes: ["service", "page"],
  migrate: {
    document(doc) {
      const patches: NodePatch[] = ["cta", "subtitle"]
        .filter((field) => doc._type === "service" && field in doc)
        .map((field) => at(field, unset()));

      if (doc._type === "page" && Array.isArray(doc.sections)) {
        const sections = (doc.sections as Section[]).map((section) => {
          if (section._type !== "serviceSection" || !("subtitle" in section)) return section;
          const { subtitle: _subtitle, ...rest } = section;
          return rest;
        });
        if (JSON.stringify(sections) !== JSON.stringify(doc.sections)) {
          patches.push(at("sections", set(sections)));
        }
      }
      return patches;
    },
  },
});
