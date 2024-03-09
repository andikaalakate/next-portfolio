/** @type {import('tailwindcss').Config} */

import scrollbar from "tailwind-scrollbar";
// import { Poppins } from "next/font/google";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      margin: "0rem 0rem",
    },
    extend: {
      animation: {
        fadeInOut: "fadeInOut 3s linear infinite",
      },
      colors: {
        primary: "#026885",
        dark: "#0f172a",
        secondary: "#003f53",
        dark_sec: "#64748b",
      },
      fontFamily: {
        poppins: ["Poppins"],
        firaMono: ["Fira Mono"],
        firaSans: ["Fira Sans"],
        firaCode: ["Fira Code"],
      },
      screens: {
        "tablet-l": "992px",
        hp: "576px",
        hmin: "425px",
        minni: "375px",
        mini: "320px",
      },
    },
  },
  keyframes: {
    fadeInOut: {
      "0%": { opacity: "0" },
      "50%": { opacity: "1" },
      "100%": { opacity: "0" },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), require("daisyui")],
  daisyui: {
    themes: "light", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
