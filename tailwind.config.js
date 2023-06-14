const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,vue}"],
  theme: {
    extend: {
      colors: {
        clay: "#CDD1D4",
        ocean: "#83AFB8",
        skyblue: "#DCEAF7",
      },
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
