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
      "green-50": "#007a00", 
      "black": "#000000", 
      "red": "#ff0000", 
      "w-primary": "rgb(240,240,240)", 
      "w-secondary": "rgba(240,240,240,0.5)", 
      "w-tertiary": "rgba(200,200,200,0.2)", 
      "transparent": "transparent"
    }, 
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"], 
      },
    },
    screens: {
      "sm": "800px", 
      "xs": "450px"
    }, 
    animation: {
      "bounce": "bounce 1s infinite", 
      "bounce-rightward": "bounceRightward 1s infinite", 
      "bob": "bob 7s infinite ease-in-out", 
      "spin-slow": "spin 7s infinite linear"
    }
  },
  plugins: [require("tailwind-gradient-mask-image")]
}

