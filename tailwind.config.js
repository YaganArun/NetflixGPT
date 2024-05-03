/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "search-bar-grow": "search-bar-grow 750 linear",
        "search-bar-shrink": "search-bar-shrink 1s linear",
      },
      keyframes: {
        "search-bar-grow": {
          "0%": { transform: "scale(0%)" },
          "100%": { transform: "scale(100%)" },
        },
        "search-bar-shrink": {
          "0%": { transform: "scale(100%)" },
          "100%": { transform: "scale(0%)" },
        },
      },
    },
  },
  plugins: [],
};
