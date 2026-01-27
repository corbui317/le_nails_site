import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#d1a3a4',
        accent: '#f1e4e6',
        gold: '#F4C542',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fade: 'fadeIn 0.8s ease-out forwards',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
