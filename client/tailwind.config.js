/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#062925",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
