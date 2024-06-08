const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',

  theme: {
    screens: {
      '2xs': '320px',
      xs: '480px',
      ...defaultTheme.screens,
    },
  },

  plugins: [require('daisyui')],
};

module.exports = config;
