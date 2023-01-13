/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: "100%",
      },
    },
    fontFamily: {
      latin: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
