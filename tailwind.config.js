/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#FED6E1",
        red: "#CC0000",
        beige: "#FEF8E2",
      },
      // Custom Fonts
      fontFamily: {
        Paradose: ["Paradose", "serif"],
        Texterius: ["Texterius", "serif"],
      },
    },
  },
  plugins: [],
};
