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
        // Brand Tokens
        brand: {
          primary: '#2F4399',
          supporting: '#233372',
          accent: '#5B6FE8',
          soft: '#EEF1FF',
          'soft-dark': 'rgba(91, 111, 232, 0.15)',
        },
        // Light Theme Tokens
        surface: {
          light: '#F7F8FA',
          'light-card': '#FFFFFF',
          dark: '#111318',
          'dark-card': '#181B22',
          'dark-elevated': '#20242D',
        },
        content: {
          'light-primary': '#17191F',
          'light-secondary': '#4B5563',
          'light-muted': '#6B7280',
          'dark-primary': '#F5F7FA',
          'dark-secondary': '#D1D5DB',
          'dark-muted': '#9CA3AF',
        },
        stroke: {
          light: '#E5E7EB',
          dark: '#2A2E38',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'brand-xs': '6px',
        'brand-sm': '10px',
        'brand-md': '12px',
        'brand-lg': '16px',
        'brand-xl': '24px',
        'brand-full': '9999px',
      },
      boxShadow: {
        'brand-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'brand-card': '0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'brand-card-dark': '0 4px 12px -2px rgba(0, 0, 0, 0.3)',
        'brand-elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'brand-elevated-dark': '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};
