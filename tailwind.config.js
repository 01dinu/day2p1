/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#23A6F0',
        'brand-cyan': '#96E9FB',
        'brand-teal': '#ABECD6',
        'brand-dark': '#252B42',
        'brand-gray': '#737373',
        // add any other custom colors you need
      },
    },
  },
  plugins: [],
}

