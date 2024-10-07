/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '480px', 
      'md': '768px', 
      'lg': '976px', 
      'xl': '1440px', 
    },
    extend: {
      colors: {
        lightBlue : '#E8E7E9',
        brightUFOGreen: '#F2FFF9',
        ufoGreen: '#00E37D',
        brightRedOrange: '#FFF2F2',
        redOrange: '#FE5E5E',
        veryLightGrey: '#F4F4F4',
        lightGrey: '#BABABA'
      }
    },
  },
  plugins: [],
}

