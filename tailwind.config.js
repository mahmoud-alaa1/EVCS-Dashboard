/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
      },
      padding: {
        "tag-lg": "4px 12px ",
        "tag-sm": "0 6px",
      },
      colors: {
        background: "var(--background)",

        green: {
          50: "var(--green-50)",
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
          800: "var(--green-800)",
          900: "var(--green-900)",
        },

        "light-green": {
          50: "var(--light-green-50)",
          100: "var(--light-green-100)",
          200: "var(--light-green-200)",
          300: "var(--light-green-300)",
          400: "var(--light-green-400)",
          500: "var(--light-green-500)",
          600: "var(--light-green-600)",
          700: "var(--light-green-700)",
          800: "var(--light-green-800)",
          900: "var(--light-green-900)",
        },
      },
    },
  },
  plugins: [],
};
