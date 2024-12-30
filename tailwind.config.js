/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'light-bg': '#E0E0E0',
        'dark-bg': '#121212',
        'light-text': '#121212',
        'dark-text': '#E0E0E0'
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        sf: ['"SF Pro"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'Arial', 'sans-serif'], // Example for testing
      },
    },
  },
  plugins: [],
}

