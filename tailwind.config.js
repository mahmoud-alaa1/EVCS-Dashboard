/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-hero": "url('/loginCover.jpeg') ",

        clients:
          "linear-gradient(90deg, rgba(202,236,172,1) 51%, rgba(246,255,239,1) 100%)",
        "button-gradient":
          "linear-gradient(90deg, #497C1D 0%, #66AD28 50%, #497C1D 100%)",

        "statistics-positive":
          "linear-gradient(180deg, rgba(102,173,40,1) 11%, rgba(134,190,86,1) 59%, rgba(246,255,239,1) 99%)",

        "statistics-negative":
          "linear-gradient(180deg, rgba(20,20,20,1) 50%, rgba(250,250,250,1) 100%, rgba(218,218,218,1) 100%)",

        "login-gradient":
          "linear-gradient(63deg, rgba(102,173,40,1) 11%, rgba(0,0,0,1) 52%)",
      },

      gridTemplateColumns: {
        statistics: "repeat(auto-fit, minmax(260px, 1fr))",
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
        "tag-lg": "0px 12px ",
        "tag-sm": "0 6px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },

      boxShadow: {
        statistics: "0px 8px 16.7px 0px rgba(46, 46, 50, 0.2)", // #2E2E3233 in rgba is equivalent to rgba(46, 46, 50, 0.2)',
      },

      colors: {
        chart: {
          axis: {
            data: "var(--chart-axis-data)",
            label: "var(--green-900)",
          },
        },

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
