/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'color-Dark-cyan': 'hsl(185, 75%, 39%)',
        'color-Very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'color-Dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'color-Dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        KumbhSans: 'Kumbh Sans',
      },
      backgroundImage: {
        'Image-body': "url('/images/bg-pattern-top.svg'), url('/images/bg-pattern-bottom.svg')",
        'Image-pattern-card': "url('/images/bg-pattern-card.svg')",
      },
      backgroundPosition: {
        'Image-position': 'right 52vw bottom 41vh, left 50vw top 50vh',
      },
    },
  },
  plugins: [],
}