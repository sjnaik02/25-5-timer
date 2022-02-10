module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
