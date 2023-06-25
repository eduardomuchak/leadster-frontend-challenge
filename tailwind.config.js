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
        "asset-green-dark": "#00AE7F",
        "asset-green-medium": "#9FEFDF",
        "asset-green-light": "#C2F4EA",
        "asset-blue-dark": "#0073EA",
        "asset-blue-medium": "#A1D9FF",
        "asset-blue-light": "#C2E6FF",
        "asset-yellow-dark": "#A68E1C",
        "asset-yellow-medium": "#FFF1A0",
        "asset-yellow-light": "#FFF8D0",
        "asset-gray-dark": "#77848C",
        "asset-gray-medium": "#D0DEE7",
        "asset-gray-light": "#E8EEF3",
      },
    },
  },
  plugins: [],
};
