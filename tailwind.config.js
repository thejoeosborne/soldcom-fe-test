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
        //normally would split these up into different themes and create a gradiant for each color in each theme
        //for now just hard coding the colors needed
        dark: "#25282A",
        grayBackground: "#F5F8FA",
        grayBorder: "#EBEAED",
        darkRed: "#E82418",
        customRed: "#F93822",
        customLightBlue: "#00A3E0",
        customGreen: "#84AE2B",
      },
    },
  },
  plugins: [],
};
