/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'kristi': ['Kristi','sans-serif'],
        'montserrat': ['Montserrat','sans-serif'],
      },
      colors:{
        'cafe-gray': "#414141",
        'cafe-yellow': "#ffae00",
      },
      backgroundImage: {
        'hero-pattern': "url('images/hero-coffee.png')",
        'hero-color': "url('images/hero-color.png')",
        'bean': "url('images/beans.png')",
        'coffee': "url('images/about.jpg')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 65px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}
