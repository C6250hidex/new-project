/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./build/*.html"],
  theme: {
    extend: {},
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
  plugins: [],
};

