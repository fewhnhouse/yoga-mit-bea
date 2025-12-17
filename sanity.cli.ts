import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  studioHost: "yoga-therapie-bea",
  autoUpdates: true,
  vite: {
    envPrefix: ["NEXT_PUBLIC_", "SANITY_STUDIO_"],
  },
  typegen: {
    // Glob pattern to find files containing GROQ queries
    path: "./src/**/*.{ts,tsx}",
    // Path to the extracted schema
    schema: "./src/sanity/schema.json",
    // Output file for generated types
    generates: "./src/sanity/sanity.types.ts",
    // Automatically type sanity client fetch calls
    overloadClientMethods: true,
  },
});

