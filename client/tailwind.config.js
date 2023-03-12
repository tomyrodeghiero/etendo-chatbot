/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#F5F5FC",
          300: "#EFF1F7",
          400: "#D3D6E1",
          500: "#F2F5F9",
          600: "#808695",
          700: "#666666",
          800: "#999999",
        },
        blue: {
          700: "#7182FF",
          900: "#202452",
        },
      },
    },
  },
  plugins: [],
};
