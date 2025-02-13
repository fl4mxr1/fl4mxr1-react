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
      "black": "#000000", 
      "w-primary": "rgb(240,240,240)", 
      "w-secondary": "rgba(240,240,240,0.5)", 
      "w-tertiary": "rgba(200,200,200,0.2)"
    }, 
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"], 
      },
    },
    dropShadow: {
      "contrast": "0 0 10px rgba(0, 0, 0, 1)",
    }, 
  },
  plugins: [require("tailwind-gradient-mask-image")]
}

