module.exports = {
  content: ["*.html", "./dist/js/*.js"],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
    extend: {
      colors: {
        "green": "#00C865",
        "greenHover": "#26d07c",
        "greenLight": "#CCF4E0",
        "customGray": "#222222",
        "grayLight": "#555555",
        "whiteGreen": "#f4f9f4",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "1em",
              marginBottom: "1em",
              lineHeight: "1.55",
            },
            strong: {
              fontWeight: "500",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
