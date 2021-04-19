import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  colors: {
    grey: {
      100: "#F6F7F8",
      200: "#E8EAEE",
      300: "#E9EBEE",
      400: "#D7DFE7",
      500: "#8D98AA",
      800: "#1B3155",
      900: "#071B3C",
      1000: "#041027",
    },
    purple: {
      200: "#ECE8FA",
      500: "#9D86F8",
      700: "#6B57B8",
      900: "#5C2F97",
    },
    blue: {
      300: "#D1F2FA",
      700: "#06B5DD",
      900: "#0F91AE",
    },
    green: {
      500: "#67A143",
    },
    red: {
      700: "#EF4D4D",
    },
  },
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans",
  },
  sizes: {
    container: {
      xl: " 1424px",
    },
  },
});

export default theme;
