/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burmaFont: ['BurmaFont', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

