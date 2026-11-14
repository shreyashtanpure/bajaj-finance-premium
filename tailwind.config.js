/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bajaj: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bee3fd',
          300: '#91d2fb',
          400: '#5cbbf7',
          500: '#0072ce', // Signature Bajaj Blue
          600: '#005fae',
          700: '#004c8c',
          800: '#003e72',
          900: '#001c38', // Deep Bajaj Navy
          950: '#030f1c', // Ultra Dark Navy
          electric: '#00a3ff',
          gold: '#eab308',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'bajaj-glow': '0 0 35px -5px rgba(0, 114, 206, 0.35)',
        'bajaj-card': '0 20px 40px -15px rgba(0, 28, 56, 0.12)',
        'bajaj-card-hover': '0 30px 60px -15px rgba(0, 114, 206, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
