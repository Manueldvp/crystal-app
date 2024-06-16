const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    
    
      colors: {
        "fuchsia-pink": {
          50: "#fcf7fc",
          100: "#f9eef9",
          200: "#f2dbf3",
          300: "#e8bfe8",
          400: "#da98d9",
          500: "#c267c0",
          600: "#a851a4",
          700: "#8b4087",
          800: "#72366e",
          900: "#5f305b",
          950: "#3c1638",
        },
        "pink-secondary": {
          50: "#f7f7fb",
          100: "#f0f0f7",
          200: "#e3e3f1",
          300: "#cecce6",
          400: "#b3aed7",
          500: "#978dc5",
          600: "#8070b3",
          700: "#7160a1",
          800: "#5e5087",
          900: "#4e436f",
          950: "#322b4a",
        },
        "purple-secondary": {
          50: "#f9f8fc",
          100: "#f2f0f7",
          200: "#e8e3f1",
          300: "#d5cde5",
          400: "#b9acd4",
          500: "#9e8bc1",
          600: "#8570ad",
          700: "#715c96",
          800: "#5f4e7b",
          900: "#4e4063",
          950: "#322645",
        },
        "grey-cristal": {
          50: "#f6f7f6",
          100: "#e4e5e2",
          200: "#c8cbc4",
          300: "#a4a99f",
          400: "#80867b",
          500: "#656b61",
          600: "#50554c",
          700: "#42463f",
          800: "#363934",
          900: "#30322f",
          950: "#191b18",
        },
        "blue-health": {
          50: "#ebfffe",
          100: "#ceffff",
          200: "#a2fcff",
          300: "#63f7fd",
          400: "#1ce8f4",
          500: "#00c4d2",
          600: "#03a2b7",
          700: "#0a8194",
          800: "#126778",
          900: "#145565",
          950: "#063946",
        },
        "aquamarine-blue": {
          50: "#eefdfd",
          100: "#d4f9f9",
          200: "#aef2f3",
          300: "#5ce1e6",
          400: "#37d1d9",
          500: "#1bb4bf",
          600: "#1991a1",
          700: "#1b7483",
          800: "#1f5f6b",
          900: "#1e4f5b",
          950: "#0e343e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
