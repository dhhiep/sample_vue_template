/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {},
    extend: {
      maxWidth: { app: '1080px' },
    },
  },
  plugins: [require('flowbite/plugin')],
};
