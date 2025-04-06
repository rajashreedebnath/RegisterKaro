/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveUpDown: 'moveCircles 10s linear infinite alternate',
      },
      keyframes: {
        moveCircles: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' },
        },
      },
    },
  },
  plugins: [],
}