import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "static",
  integrations: [tailwind()],

  vite: {
    optimizeDeps: {
      exclude: ["shiki"],
    },
  },

  adapter: netlify(),
});