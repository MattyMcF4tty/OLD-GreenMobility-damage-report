/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        Mgreen: {
          100: '#3ea635',
          200: '#24382f'
        }
      }
    },
  },
  plugins: [],
}
