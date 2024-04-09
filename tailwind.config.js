/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-primary': '#d5b5d5',
        'nav-secondary': '#5c5c82'
      }
    },
  },
  plugins: [],
}

