/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      boxShadow: { soft: '0 6px 24px rgba(0,0,0,0.08)' },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
}