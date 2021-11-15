module.exports = {
  mode: 'jit',
  purge: ['./src/*.{ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['"IM Fell DW Pica"', 'serif'],
      displayCaps: ['"IM Fell English SC"', 'serif'],
      body: ['"PT Sans Narrow"', 'sans-serif'],
    },
    extend: {
      colors: {
        display: '#8b5cf6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
