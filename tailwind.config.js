/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '480px',
        xl: '1450px',
        '2xl': '1450px',
      },
      colors: {
        primary: '#00214A',
        'primary-dark': '#003758',
        secondary: 'rgba(33, 150, 243, 0.3)',
        success: '#5dd2c5',
        info: '#0494c4',
        danger: '#D32F2F',
        tuscany: '#bda392',
        cultured: '#f7f7f7',
        'light-secondary': '#DDEAF3',
        gray: '#bbbbbb',
        black: 'rgba(0, 0, 0, 0.87)',
        dark: '#2E3B4C',
        disabled: 'rgba(0, 0, 0, 0.38)',
        'table-row-muted': '#f9fbfc',
        'dark-disabled': 'rgba(0, 0, 0, 0.6)',
        'light-gray': '#F3F5F6',
        'ghost-white': '#E0E0E0',
        'granite-gray': '#576B75',
        'spanish-gray': '#BDBDBD',
        'light-silver': '#d9d9d9',
      },
      spacing: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
        7: '35px',
        8: '40px',
        9: '45px',
        10: '50px',
      },
      fontSize: {
        base: '1rem',
        'text-3xl': '2rem',
        'text-6xl': '3.375rem',
      },
      boxShadow: {
        sm: '0 3px 3px 0 rgba(0, 0, 0, 0.12)',
        DEFAULT: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      aspectRatio: {
        phone: '9 / 16',
      },
    },
  },

  plugins: [require('flowbite/plugin')],
};
