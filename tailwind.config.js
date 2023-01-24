/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "LightBackground": "hsl(0, 0%, 98%)",
        "DarkText": "hsl(0, 0%, 100%)",
        "LightInput": "hsl(0, 0%, 52%)",
        "LightText": "hsl(200, 15%, 8%)",
        "DarkBackground": "hsl(207, 26%, 17%)",
        "DarkElements": "hsl(209, 23%, 22%)",
      },
      fontFamily: {
        "Nunito": ["Nunito Sans ", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "header": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  },
  plugins: [],
}
