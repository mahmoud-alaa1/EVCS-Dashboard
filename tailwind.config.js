/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-hero": "url('/loginCover.jpeg') ",

        "button-gradient":
          "linear-gradient(90deg, #497C1D 0%, #66AD28 50%, #497C1D 100%)",

        "statistics-positive":
          "linear-gradient(0deg, var(--Base, #66AD28), var(--Base, #66AD28)),linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)",

        "statistics-negative":
          "linear-gradient(0deg, var(--Dark, #101010), var(--Dark, #101010)),linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)",

        "login-gradient":
          "linear-gradient(0deg, var(--Dark, #101010), var(--Dark, #101010)),radial-gradient(50% 50% at 50% 50%, rgba(102, 173, 40, 0.8) 0%, rgba(102, 173, 40, 0) 100%)",
      },

      gridTemplateColumns: {
        statistics: "repeat(auto-fit, minmax(200px, 1fr))",
      },

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
        "umm-al-quwain": {
          text: "#A62195",
          bg: "#F9E1F6",
        },
        sharjah: {
          text: "#B90D0D",
          bg: "#FCCFCF",
        },
        dubai: {
          text: "#452CD1",
          bg: "#DFDAFB",
        },
        "abu-dhabi": {
          text: "#264C68",
          bg: "#E0E8ED",
        },
        ajman: {
          text: "#2E8F15",
          bg: "#D0E6BC",
        },
        "ras-al-khaimah": {
          text: "#4C7628",
          bg: "#DAEDCA",
        },
        fujairah: {
          text: "#196694",
          bg: "#E2F1FA",
        },
        admin: {
          text: "#101010",
          bg: "#FFCD71",
        },

        dark: "var(--dark)",

        green: {
          gradient: "linear-gradient(90deg, #343434 0%, #66AD28 100%)",

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
