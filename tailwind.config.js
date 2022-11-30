/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: ["jit"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#1C2F50",
        pri_7: "#021C47",
        sec: "#FAA019",
      },
      screens: {},
    },
  },
  plugins: [],
};
