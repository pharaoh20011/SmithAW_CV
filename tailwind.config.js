/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1abc9c', // Teal
          hover: '#16a085',
          light: '#e8f8f5',
        },
        secondary: {
          DEFAULT: '#2c3e50', // Deep Navy Blue
          hover: '#1a252f',
          dark: '#141d26',
        },
        dark: {
          DEFAULT: '#1a252f',
          slate: '#212529',
        },
        light: {
          DEFAULT: '#f8f9fa',
          muted: '#e9ecef',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Lato', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 24px 48px rgba(0, 0, 0, 0.18)',
        'nav': '0 4px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
