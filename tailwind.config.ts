import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A6B5E',
          light: '#2BB5A0',
          lighter: '#4CC9B5',
        },
        secondary: '#E8A030',
        'secondary-dark': '#5C3D00',
        tertiary: '#1D1D1B',
        neutral: {
          DEFAULT: '#F4F1EA',
          dark: '#E8E5DC',
          darker: '#D4D0C3',
        },
        text: {
          light: '#FFFFFF',
          DEFAULT: '#1D1D1B',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['DM Serif Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        section: '6rem',
      },
      borderRadius: {
        lg: '0.75rem',
      },
    },
  },
  plugins: [],
}
export default config
