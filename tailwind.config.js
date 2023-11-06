/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#000050',
      'secondary': '#0d0f61',
      'tertiary': '#1a1e73',
      'quaternary': '#262d84',
      'quinary': '#333c95',
    }),
    extend: {},
  },
  plugins: [],
}

