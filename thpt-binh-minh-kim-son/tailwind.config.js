/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        mathPhysicsBlue: '#3A7BD5',
        chemistryOrange: '#FFA500',
        biologyGreen: '#4CAF50',
        lightGray: '#F5F5F5',
        darkGray: '#333333',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', '40px'],
        h2: ['24px', '32px'],
        body: ['16px', '24px'],
      }
    },
  },
  plugins: [],
}
