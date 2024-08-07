/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: 16,
    },
  },
  plugins: [],
  darkMode: "selector",
}