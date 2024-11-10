import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ["shiki"],
    },
  },
});
