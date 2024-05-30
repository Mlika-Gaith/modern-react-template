/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8713D5',
          orange: '#F99F3E',
        },
      },
    },
  },
  plugins: [],
};
