/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
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
          DEFAULT: '#EADDFF',
          dark: '#4F378B',
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
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(fit-content, 1fr))',
      },
    },
  },
  plugins: [],
};
