/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif',
      lexend: 'Lexend, sans-serif',
    },
    extend: {
      maxWidth: { app: '1080px' },
    },
  },
  plugins: [require('flowbite/plugin')],
};
