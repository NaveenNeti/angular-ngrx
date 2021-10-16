module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Noto Sans']
    }
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}
