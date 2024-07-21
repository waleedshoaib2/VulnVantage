import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1f1f1f',
        red: {
          600: '#ff0043',
        },
        white: '#ffffff',
      },
      backgroundImage: {
        'custom-bg': "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
