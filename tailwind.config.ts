import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        loop:{
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%)'}
        },
        aboutImage:{
          'to': {transform: 'translateX(0)'}
        },
        aboutDescription:{
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation:{
        loop:'loop linear infinite var(--duration) var(--direction)',
        aboutImage: 'aboutImage linear forwards',
        aboutDescription: 'aboutDescription linear forwards'
      },
    },
  },
  plugins: [],
};
export default config;
