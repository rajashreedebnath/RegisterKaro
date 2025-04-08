/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#164760',
        customOrange: '#ffa229',
      },
      keyframes: {
        moveUpDown: {
          '0%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        moveUpDown: 'moveUpDown 4s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
