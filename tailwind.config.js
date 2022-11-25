/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
      pri:"#1C2F50",
      pri_7:"#021C47",
      sec:"#FAA019",
    },
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '900px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
},
  },
  plugins: [],
}