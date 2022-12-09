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
      fontFamily: {
        Aharoni: ["aharoni", "san-serif"],
      },
      screens: {},
      animation: {
        slide: "slide 20s  linear",
        slide2: "slide2 20s infinite linear",
        slide3: "slide3 20s infinite linear",
        slide4: "slide4 20s infinite linear",
        cycle: "cycle 30s infinite linear",
        cycle_2: "cycle_2 30s infinite linear",
      },

      keyframes: {
        /* top trending */
        slide: {
          "0%": {
            transform: "translate(-100px 0px)",
          },

          "50%": {
            transform: "translate(-550px, 0px)",
          },

          "100%": {
            transform: "translate(-100px 0px)",
          },
        },

        /* buttom trending */
        slide2: {
          "0%": {
            transform: "translateX(-300px)",
          },

          "50%": {
            transform: "translateX(0 )",
          },

          "100%": {
            transform: "translateX(-300px)",
          },
        },

        /* top auctions */

        slide3: {
          "0%": {
            transform: "translate(-150px, 0px)",
          },

          "50%": {
            transform: "translate(-950px, 0px)",
          },

          "100%": {
            transform: "translate(-150px 0px)",
          },
        },

        /* buttom auctions */

        slide4: {
          "0%": {
            transform: "translate(-950px, 0px)",
          },

          "50%": {
            transform: "translate(-150px, 0px)",
          },

          "100%": {
            transform: "translate(-860px 0px)",
          },
        },

        /* glow movement*/
      },
    },
  },
  plugins: [],
};
