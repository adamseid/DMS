/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
        fontFamily: {
            segoe: ["SegoeUI", "sans-serif"],
        },
        colors: {
            brand: {
                primary: "#7C0EDD",
                secondary: "#9747FF",
                tertiary: "#AA5BFF",
                highlight: "#EBAFFF",
                white: "#FFFFFF",
                dark: "#101010"
            },
        }
    }
  },
  plugins: [],
};

export default config;
