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
        grey: {
          DEFAULT: "var(--grey-normal)",
          hover: "var(--grey-normal-hover)",
          active: "var(--grey-normal-active)",
          light: {
            DEFAULT: "var(--grey-light)",
            hover: "var(--grey-light-hover)",
            active: "var(--grey-light-active)",
          },
          dark: {
            DEFAULT: "var(--grey-dark)",
            hover: "var(--grey-dark-hover)",
            active: "var(--grey-dark-active)",
          },
          darker: "var(--grey-darker)",
        },

        blue: {
          DEFAULT: "var(--blue-normal)",
          hover: "var(--blue-normal-hover)",
          active: "var(--blue-normal-active)",
          light: {
            DEFAULT: "var(--blue-light)",
            hover: "var(--blue-light-hover)",
            active: "var(--blue-light-active)",
          },
          dark: {
            DEFAULT: "var(--blue-dark)",
            hover: "var(--blue-dark-hover)",
            active: "var(--blue-dark-active)",
          },
          darker: "var(--blue-darker)",
        },

        green: {
          DEFAULT: "var(--green-normal)",
          hover: "var(--green-normal-hover)",
          active: "var(--green-normal-active)",
          light: {
            DEFAULT: "var(--green-light)",
            hover: "var(--green-light-hover)",
            active: "var(--green-light-active)",
          },
          dark: {
            DEFAULT: "var(--green-dark)",
            hover: "var(--green-dark-hover)",
            active: "var(--green-dark-active)",
          },
          darker: "var(--green-darker)",
        },

        "sidebar-text": {
          DEFAULT: "var(--sidebar-text)",
        },

        "light-green": {
          DEFAULT: "var(--light-green-normal)",
          hover: "var(--light-green-normal-hover)",
          active: "var(--light-green-normal-active)",
          light: {
            DEFAULT: "var(--light-green-light)",
            hover: "var(--light-green-light-hover)",
            active: "var(--light-green-light-active)",
          },
          dark: {
            DEFAULT: "var(--light-green-dark)",
          },
          white: {
            DEFAULT: "var(--light-green-white)",
            hover: "var(--light-green-white-hover)",
            active: "var(--light-green-white-active)",
          },
        },
      },
    },
  },
  plugins: [],
};
