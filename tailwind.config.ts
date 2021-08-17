import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary': '#d7d8ff'
    },
    extend: {},
  },
  plugins: [],
};

export default config;
