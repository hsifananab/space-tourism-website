/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed'],
        bellefair: ['Bellefair'],
        barlow: ['Barlow'],
      },
      backgroundImage: {
        'lg-home-pattern':
          "url('/src/assets/img/home/background-home-desktop.jpg')",
        'md-home-pattern':
          "url('/src/assets/img/home/background-home-tablet.jpg')",
        'home-pattern':
          "url('/src/assets/img/home/background-home-mobile.jpg')",
        'lg-destination-pattern':
          "url('/src/assets/img/destination/background-destination-desktop.jpg')",
        'md-destination-pattern':
          "url('/src/assets/img/destination/background-destination-tablet.jpg')",
        'destination-pattern':
          "url('/src/assets/img/destination/background-destination-mobile.jpg')",
        'crew-pattern':
          "url('/src/assets/img/crew/background-crew-desktop.jpg')",
        'technology-pattern':
          "url('/src/assets/img/technology/background-technology-desktop.jpg')",
      },
      colors: {
        dark: '#0B0D17',
        primary: '#D0D6F9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
