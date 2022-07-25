/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      wide: ".35em",
      widest: ".60em",
    },
    colors: {
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      darkGray: "hsl(0, 0%, 63%)",
      veryDarkGray: "hsl(0, 0%, 27%)",
      transparent: "transparent",
    },
    padding: {
      image: "63.6%",
      0: "0px",
    },
  },
  plugins: [],
};
