/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#2F4156",
        teal: "#567C8D",
        beige: "#F5EFE8",
        skyblue: "#C8D9E6",
        white: "#FFFFFF",
        grey: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
