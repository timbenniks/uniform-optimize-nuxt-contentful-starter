module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Source Sans Pro", "sans-serif"],
    },
    colors: {
      bg: "#f6f4f1",
      dark: "#282828",
      accent: "#415ac2",
      white: "#ffffff",
      grey: "#e1dad0",
    },
    extend: {
      minHeight: {
        500: "500px",
        header: "4rem",
      },
      maxHeight: {
        500: "500px",
      },
    },
  },
  variants: {},
  plugins: [],
};
