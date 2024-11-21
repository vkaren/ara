"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

const roboto = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 32,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#2d66f9",
      light: "#b3c9fc",
      "100": "#dae5ff",
    },
    secondary: {
      main: "#293EB3FF",
      dark: "#000b26",
    },
    success: {
      main: "#008900",
      light: "#96ef96",
    },
    error: {
      main: "#e43d3d",
      light: "#ffafaf",
    },
    common: {
      black: "#1e1e1e",
      white: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    grey: {
      "100": "#0000001F",
      "200": "#F3F3F3FF",
      "300": "#cccccc",
      "600": "#666666",
      "700": "#2f2f2f",
    },
    text: {
      primary: "#1e1e1e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          backgroundColor: "#2d66f9",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1a49d3",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#1e1e1e",
        },
      },
    },
  },
});

const globalStyles = () => (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
      },
      "#__next": {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },
    }}
  />
);

export { theme, globalStyles };
