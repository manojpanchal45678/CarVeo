/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(100px)", filter: "blur(33px)" },
          "100%": { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
        "fade-in-delay-200": "fade-in 1s ease-in-out 0.2s forwards",
        "fade-in-delay-400": "fade-in 1s ease-in-out 0.4s forwards",
      },
      fontFamily:{
        josfin:["Josefin Sans", "sans-serif"],
      },
    },
  },
  darkMode: "class", 
  plugins: [],
}

