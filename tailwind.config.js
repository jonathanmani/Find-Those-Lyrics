/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  daisyui: {
    themes: ["corporate"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
