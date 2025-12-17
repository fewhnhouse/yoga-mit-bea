import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/lib/structure";

// Preview URL configuration
const SANITY_STUDIO_PREVIEW_ORIGIN =
  process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "http://localhost:3000";

export default defineConfig({
  name: "yoga-und-therapie-mit-bea",
  title: "Yoga & Therapie mit Bea",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
