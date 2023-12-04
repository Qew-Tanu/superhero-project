import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

const secondEffect = 0.5;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 5s ease-in-out infinite',
        flip: `flip ${secondEffect}s linear 1 forwards`,
        show: `show ${secondEffect}s linear 1 forwards`
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1
          },
          '40%': {
            opacity: 0
          },
          '50%': {
            opacity: 0
          },
          '60%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          },
        },
        flip: {
          '0%': {
            transform: "rotateY(0deg)"
          },
          '50%': {
            transform: "rotateY(90deg)"
          },
          '100%': {
            transform: "rotateY(180deg)"
          },

        },
        show: {
          '0%': {
            transform: "rotateY(180deg)",
            opacity: 0
          },
          '50%': {
            transform: "rotateY(180deg)",
            opacity: 0
          },
          '51%': {
            transform: "rotateY(180deg)",
            opacity: 80
          },
          '100%': {
            transform: "rotateY(180deg)",
            opacity: 80
          },
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: "rotateY(90deg)"
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    }),
  ],
}

