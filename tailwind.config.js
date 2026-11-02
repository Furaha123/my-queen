/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3b2129',
        blush: '#fff7f8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        hand: ['Caveat', 'Segoe Print', 'cursive'],
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(190, 70, 105, 0.35)',
      },
    },
  },
  plugins: [],
}
