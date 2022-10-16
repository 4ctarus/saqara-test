/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        display: [
          '45px',
          {
            fontFamily: 'Inter',
            fontStyle: 'Regular',
            fontWeight: '400',
            letterSpacing: '0px',
            lineHeight: '52px',
          },
        ],
        headline: [
          '28px',
          {
            fontFamily: 'Inter',
            fontStyle: 'Regular',
            fontWeight: '400',
            letterSpacing: '0px',
            lineHeight: '36px',
          },
        ],
        title: [
          '16px',
          {
            fontFamily: 'Inter',
            fontStyle: 'Medium',
            fontWeight: '500',
            letterSpacing: '0.15px',
            lineHeight: '24px',
          },
        ],
        body: [
          '14px',
          {
            fontFamily: 'Inter',
            fontStyle: 'Regular',
            fontWeight: '400',
            letterSpacing: '0.25px',
            lineHeight: '20px',
          },
        ],
        label: [
          '12px',
          {
            fontFamily: 'Inter',
            fontStyle: 'Medium',
            fontWeight: '500',
            letterSpacing: '0.50px',
            lineHeight: '16px',
          },
        ],
      },
      colors: {
        outline: {
          DEFAULT: '#79747E',
          dark: '#938F99',
        },
        'on-surface-variant': {
          DEFAULT: '#49454F',
          dark: '#CAC4D0',
        },
        'on-surface': {
          DEFAULT: '#1C1B1F',
          dark: '#E6E1E5',
        },
        'surface-variant': {
          DEFAULT: '#E7E0EC',
          dark: '#49454F',
        },
        surface: {
          DEFAULT: '#FFFBFE',
          dark: '#1C1B1F',
        },
        'on-primary-container': {
          DEFAULT: '#21005D',
          dark: '#EADDFF',
        },
        'on-primary': {
          DEFAULT: '#FFFFFF',
          dark: '#381E72',
        },
        'primary-container': {
          DEFAULT: '#21005D',
          dark: '#EADDFF',
        },
        primary: {
          DEFAULT: '#6750A4',
          dark: '#D0BCFF',
        },
        disabled: {
          DEFAULT: 'rgba(31, 31, 31, 0.12)',
          dark: 'rgba(227, 227, 227, 0.12)',
        },
      },
      boxShadow: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
        4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)',
        5: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
