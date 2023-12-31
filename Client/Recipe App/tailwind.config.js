/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Assistant"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'green-light': '#F4FFF4;',
        'green-mid': '#BCECD5;',
        'green-dark': '#85BAA1;',
        'main-font': '#00274A;',
        'grey-near': '#DADADA;',
      },
      width: {
        '1/2': '1/2',
      }
    },
  },
  plugins: [],
}