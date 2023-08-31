/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors:{
      "primary":'#0C8DE8',
      "secondary": "#0AFC9A",
      "Main_Gradient": "linear-gradient(0.25turn,#0AFC9A,#0C8DE8 )"


    },transitionDuration: {
        'long': '900ms',
      },
      fontFamily:{
        "Fantasy": "fantasy"
      }
  
  },
  
  },
  plugins: [],
}