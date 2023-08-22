/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './components/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: "#25282A",
        grayBackground: "#F5F8FA",
        darkRed: "#E82418",
        customRed: "#F93822"
      },
    },
  },
  plugins: [],
};
