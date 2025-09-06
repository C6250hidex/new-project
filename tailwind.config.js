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
            'fad-in': 'fadeIn 0.5s ease-in-out'
        },
        keyframes:{
            fadeIn:{
                '0%':{opacity:0},
                '100%':{opacity:1}
            },
        }
    },
  },
  plugins: [],
};

