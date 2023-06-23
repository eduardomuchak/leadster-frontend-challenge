/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue-100": "#2E9AFF",
        "primary-blue-200": "#1A90FF",
        "primary-blue-300": "#0084FF",
        "primary-blue-400": "#0164C1",
        "primary-blue-500": "#005AAD",
        "image-hover": "rgba(0, 90, 173, 0.4)",
        "light-blue": "#F0F8FF",
        "gray-bd": "#C8D4DD",
      },
    },
  },
  plugins: [],
};
