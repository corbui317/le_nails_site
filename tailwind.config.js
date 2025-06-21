module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#d1a3a4',
        accent: '#f1e4e6',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fade: 'fadeIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
