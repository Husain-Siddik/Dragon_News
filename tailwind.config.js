/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        // name of font any name : then object
      _popins:'Poppins, ui-serif',
      _outfit :'Outfit ,ui-serif'

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

