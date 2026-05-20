/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './app/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fff5f0',
          100: '#ffe2d2',
          200: '#ffc4a4',
          300: '#ffa176',
          400: '#ff7e4d',
          500: '#e76f51',
          600: '#d65a3c',
          700: '#b34529',
          800: '#8a3320',
          900: '#5e2316',
        },
        accent: {
          400: '#4fd1c5',
          500: '#2a9d8f',
          600: '#22897c',
        },
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(231, 111, 81, 0.55)',
        soft: '0 10px 40px -10px rgba(15, 17, 21, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-14px) rotate(2deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
