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
        'Image-bg-pattern-bottom': "url('/images/bg-pattern-bottom.svg')",
        'Image-bg-pattern-top': "url('/images/bg-pattern-top.svg')",
        'Image-pattern-card': "url('/images/bg-pattern-card.svg')",
      },
    },
  },
  plugins: [],
}