/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bg": "#000000", 
      "green": "#00ff00", 
      "w-primary": "rgb(240,240,240)", 
      "w-secondary": "rgba(240,240,240,0.5)", 
      "w-tertiary": "rgba(200,200,200,0.2)"
    }, 
    extend: {
      fontFamily: {
        display: ["Dela Gothic One", "sans-serif"],
        sans: ["Be Vietnam Pro", "sans-serif"], 
      },
    },
    screens: {
      "aboutme": "740px",
    },
    dropShadow: {
      "contrast": "0 0 10px rgba(0, 0, 0, 1)",
    }, 
    animation: {
      "scrollingcontent-scroll": "scrollingcontent-scroll 10s linear infinite", 
      "scrollingcontent-scroll-invert": "scrollingcontent-scroll-invert 10s linear infinite"
    }, 
    keyframes: {
      "scrollingcontent-scroll": {
        "0%": { translate: "0%" }, 
        "100%": { translate: "-100%" }
      }, 
      "scrollingcontent-scroll-invert": {
        "0%": { translate: "-100%" }, 
        "100%": { translate: "0%" }
      }
    }
  },
  plugins: [],
}

