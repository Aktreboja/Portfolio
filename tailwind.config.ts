import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: '0'},
          "100%": { opacity: '1'}
        },
        fadeInLeft: {
          "0%": { opacity: '0', transform: "translate(-100px)"},
          "100%": {opacity: '1', transform: "translate(0px)"}
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'baseBg': '#37718E',
      'secondaryBg': '#2C2C2D',
      'title-heading': '#FFFFFF',
      'simple-text': '#454955',
      'modal-bg': '#35393F',
      'text-skill': '#D8D9DA',
      'skill-bg': '#475156',
    }
  },
  plugins: [],
}
export default config
