/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
       screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      animation:{
            'fad-in': 'fadeIn 0.5s ease-in-out',
             blink: 'blink 1s step-end infinite',
        },
        keyframes:{
            fadeIn:{
                '0%':{opacity:0},
                '100%':{opacity:1}
            },
            blink: {
              'from, to': {
                'background-color': 'transparent',
              },
              '50%': {
                'background-color': 'rgb(55, 65, 81)', // Tailwind's gray-700
              },
            }
        }
    },
  },
  plugins: [],
};

