"use client";
import { createTheme } from "@mui/material/styles";

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#BB9C00",
      yellowShade: "#BB9C00",
      yellowShade2: "#ad9726",
      blueShade1: "#292A46",
      blueShade2: "#17182A",
      blueShade3: "#1F0E4A",
      blueShade4: "#4770F6",

      greyShade1: "#F6F6F6",
      greyShade2: "#F3F3F3",
      greyShade3: "#EFEFEF",
      greyShade4: "#B7B7B7",
      greyShade5: "#CBCBCB",
      greyShade6: "#656565",
      greyShade7: "#707070",
      greyShade8: "#E2E2E2",

      blackShade1: "#242424",
      white: "#ffffff",
      whiteShade1: "#CFCFCF",
      greenShade1: "#63A5B1",
      brownShade1: "#BFB2A1",
      borwnShade2: "#6D6D6D",
      black: "#000000",
      headerShade: "#222222e0",
    },
    secondary: {
      main: "#19857b",
      error: "#c43737",
    },
    error: {
      main: "#f4f4f4",
    },
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
      xxl: 1900,
      xxxl: 2400,
    },
  },
});

export default theme;
