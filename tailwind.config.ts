import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* Clinical Eminence Palette */
        primary: {
          DEFAULT: '#0A6B5E',    /* Deep Emerald */
          dark: '#085249',       /* Hover state */
          light: '#0E8C7A',      /* Light variant */
          lighter: '#11A894',    /* Lighter variant */
        },
        accent: {
          DEFAULT: '#8B6D11',    /* Oro Viejo */
          dark: '#6E560D',       /* Hover state */
        },
        secondary: '#8B6D11',    /* Para backward compatibility */
        'secondary-dark': '#6E560D',
        tertiary: '#1A1A1A',
        /* Backgrounds */
        bg: '#FCF9F2',          /* Cream White */
        surface: '#F4F1EA',     /* Dim - secciones alternas */
        /* Neutrals */
        neutral: {
          DEFAULT: '#F4F1EA',
          dark: '#E5E1D8',
          darker: '#D4D0C3',
        },
        /* Text */
        text: {
          light: '#FFFFFF',
          DEFAULT: '#1A1A1A',
          muted: '#5A5A5A',
        },
        border: '#E5E1D8',
      },
      fontFamily: {
        heading: ['Newsreader', 'Georgia', 'serif'],
        body: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
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
