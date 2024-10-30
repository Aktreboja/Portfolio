import type { Config } from 'tailwindcss';

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
    fadeInLeft: 'fadeInLeft 1s ease-in-out forwards',
   },
   keyframes: {
    fadeIn: {
     '0%': { opacity: '0' },
     '100%': { opacity: '1' },
    },
    fadeInLeft: {
     '0%': { opacity: '0', transform: 'translate(-100px)' },
     '100%': { opacity: '1', transform: 'translate(0px)' },
    },
   },
   backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic':
     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
  },
  colors: {
   baseBg: '#DDDBCB',
   accent: '#1B9AAA',
   accentBg: '#2C2C2D',
   white: '#FCFCFF',
   secondaryBg: '#F5F1E3',
  },
 },
 plugins: [],
};
export default config;
