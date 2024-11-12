/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bbq-red": "#D94E41",
        "bbq-brown": "#8B4513",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
