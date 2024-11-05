/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(1)',
            backgroundImage: "url('../assets/bg-2.jpg')",
          },
          '25%': {
            transform: 'scale(1.05)',
            backgroundImage: "url('../assets/bg-2.jpg')",
          },
          '75%': {
            transform: 'scale(1)',
            backgroundImage: "url('../assets/bg-3.jpg')",
          },
          '100%': {
            transform: 'scale(1.05)',
            backgroundImage: "url('../assets/bg-3.jpg')",
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 20s ease-in infinite',
      },
      colors: {
        tomato: '#ff6347',
      },
    },
  },
  plugins: [],
};

// /src/css/../assets/bg-2.jpg