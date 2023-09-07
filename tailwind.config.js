/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors:{
      "primary":'#0969AD',
      "primary-hover":'#0A89E2',
      "Main_Gradient": "linear-gradient(0.25turn,#0AFC9A,#0C8DE8 )"


    },transitionDuration: {
        'long': '900ms',
      },
      fontFamily:{
        "Fantasy": "fantasy"
      },
      minHeight: {
        'custom': "11rem",
        'custom_2': "1.5rem"
      },
      maxWidth:{
        "Navbar":"1500px"
      },
      width:{
        "Cart":"400px"
      },
       
  
  },
  
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.position-Cart-display': {
          right: '-450px',
        },
        '.scrollbar-hide': {
          /* Hide both vertical and horizontal scroll bars */
          scrollbarWidth: 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer/Edge */
          '::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari */
          }},
      };
      addUtilities(newUtilities, ['responsive']);},
  ],
}