import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'baseBg': '#1C1C1C',
      'secondaryBg': '#2C2C2D',
      'title-heading': '#FFFFFF',
      'simple-text': '#CAC6C6',
      'modal-bg': '#35393F',
      'text-skill': '#D8D9DA',
      'skill-bg': '#475156',
    }
  },
  plugins: [],
}
export default config
