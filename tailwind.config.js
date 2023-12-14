/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'src/*.html',
    'src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
    },
    plugins: [require('preline/plugin')],
  },
};
