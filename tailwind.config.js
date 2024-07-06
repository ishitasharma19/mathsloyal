/** @type {import('tailwindcss').Config} */
/* In your Tailwind CSS configuration */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        click:"outline-none focus:ring-3 shadow-lg transform active:scale-y-75 transition-transform flex text-center "
      },
      spacing: {
        18: "4.5rem",
      },
      perspective: {
        '800': '800px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },

    },

    screens: {

      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      'xs-max': '479px',
      // => @media (max-width: 479px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
  function ({ addUtilities }) {
    const newUtilities = {
      '.perspective-800': {
        perspective: '800px',
      },
      '.rotate-y-180': {
        transform: 'rotateY(180deg)',
      },
      '.transform-style-preserve-3d': {
        transformStyle: 'preserve-3d',
      },
      '.backface-visibility-hidden': {
        backfaceVisibility: 'hidden',
      },
    }
    addUtilities(newUtilities)
  }
],
}

   