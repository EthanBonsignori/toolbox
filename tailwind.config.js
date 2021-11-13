const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['"IM Fell DW Pica"', 'serif'],
      displayCaps: ['"IM Fell English SC"', 'serif'],
      body: ['"PT Sans Narrow"', 'sans-serif'],
    },
    colors: {
      display: colors.violet['500'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
