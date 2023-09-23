/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        sm: '800px',
        md: '800px',
        lg: '800px',
        xl: '800px',
        '2xl': '800px',
      },
    },
    extend: {
      colors: {
        primary: '#1DB954',
        text: '#FFFFFF',
        'text-secondary': '#BDFFFF',
        'deep-dark': '#121212',
        dark: '#212121',
      },
      container: {
        screens: {
          main: '200px',
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}
