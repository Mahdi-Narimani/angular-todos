/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C607C",
        secondary: "#66D2D2",
      },
      borderWidth: {
        1: "1px",
      },
    },
    fontFamily: {
      sans: "Tahoma",
    },
  },
  plugins: [],
};
