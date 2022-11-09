/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif'],
      anonymous: ['Anonymous Pro', 'serif'],
    },
    extend: {
      colors: {
        'primary-gray': '#A9A8A8',
        'primary-yellow': '#FFDD00',
      },
      backgroundColor: {
        primary: '#2C2C2C',
      },
      borderColor: {
        primary: '#2C2C2C',
      },
      screens: {
        desktop: '1920px',
      },
    },
  },
  plugins: [],
};
