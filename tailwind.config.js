/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf7ed',
          100: '#d1e9d2',
          200: '#b3dbb5',
          300: '#8fcc95',
          400: '#6cbc75',
          500: '#3A8250', // primary green
          600: '#397648',
          700: '#2e6b3e',
          800: '#235e32',
          900: '#1a5227',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#d2deeb',
          300: '#b1c7dd',
          400: '#86a9cc',
          500: '#4B86B4', // primary blue
          600: '#3d6d9a',
          700: '#345a81',
          800: '#2d4b6b',
          900: '#263e58',
        },
        earth: {
          50: '#f9f5f0',
          100: '#f1e9df',
          200: '#e1cebc',
          300: '#d1b293',
          400: '#bc9570',
          500: '#8B5A2B', // primary brown
          600: '#7d4e25',
          700: '#69401f',
          800: '#57351c',
          900: '#462c19',
        },
        success: {
          50: '#e8f7ed',
          100: '#d1f0dc',
          200: '#a3e0ba',
          300: '#76d098',
          400: '#48c076',
          500: '#2a9d56',
          600: '#237d45',
          700: '#1c6436',
          800: '#154a28',
          900: '#103c20',
        },
        warning: {
          50: '#fff8ed',
          100: '#ffeed7',
          200: '#ffd9a8',
          300: '#ffc078',
          400: '#ffa64a',
          500: '#ff8c1b',
          600: '#ef7100',
          700: '#c45900',
          800: '#9c4800',
          900: '#7d3a00',
        },
        error: {
          50: '#feecec',
          100: '#fad6d6',
          200: '#f6aeae',
          300: '#f18686',
          400: '#eb5d5d',
          500: '#e53535',
          600: '#c42121',
          700: '#a31b1b',
          800: '#831616',
          900: '#691212',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};