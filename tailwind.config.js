/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turf: {
          bg: '#00130D',
          emerald: '#00251A',
          deep: '#003A29',
          mint: '#00F5B0',
          lime: '#C8FF00',
          yellow: '#FFC400',
          textMuted: '#D0DED8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'mint-glow': '0 0 25px rgba(0, 245, 176, 0.45)',
        'mint-glow-lg': '0 0 40px rgba(0, 245, 176, 0.65)',
        'yellow-glow': '0 4px 20px rgba(255, 196, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

