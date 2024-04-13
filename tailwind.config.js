/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url(./src/assets/background.png)",
        'background-with-car': "url(./src/assets/backgound-with-car.png)"
      },
      fontFamily: {
        'title': ['Jura']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}