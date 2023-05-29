/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goldenYellow' : '#ED9100',
        'bgBlack' : '#0F0A06',
      }
    },
  },
  plugins: [],
}