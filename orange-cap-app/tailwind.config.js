const colors = require("tailwindcss/colors");
const scrollbar_hide = require("tailwind-scrollbar-hide");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "orange-cap": "#e46b24",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  variants: {
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
  },
  plugins: [scrollbar_hide],
};
