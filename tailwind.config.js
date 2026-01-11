export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        amber: {
          50: '#fffbe6',
          100: '#fff9db',
          200: '#fff3c0',
          300: '#ffec99',
          400: '#ffe066',
          500: '#ffd633',
          600: '#cca700',
          700: '#a37f00',
          800: '#846a00',
          900: '#6b5700'
        }
      }
    }
  },
  plugins: [],
}