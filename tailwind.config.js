/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url(./src/assets/background.png)"
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