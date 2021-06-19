module.exports = {
  mode: 'jit',
  purge: {
    content: ['./apps/**/*.{js,jsx,ts,tsx,html}'],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
