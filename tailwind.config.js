/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary1: "#0074B7",
        primary2: "#B31312",
        secondary1: "#508C9B",
        secondary2: "#EA906C",
        secondary3: "#EEEEEE",
      },
      textColor: {
        primary1: "#134B70",
        primary2: "#B31312",
        secondary1: "#508C9B",
        secondary2: "#EA906C",
        secondary3: "#EEEEEE",
      },
      borderColor: {
        primary2: "#B31312",
        secondary2: "#EA906C",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};