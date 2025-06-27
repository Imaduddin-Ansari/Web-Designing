/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":{'max':"640px"},
        "md":"641px",
        "lg":"1025px"
      }
    },
    fontFamily:{
      Montserrat:['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

