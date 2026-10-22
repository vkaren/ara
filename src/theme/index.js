import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#2d66f9",
  lightPrimary: "#b3c9fc",
  veryLightPrimary: "#dae5ff",
  success: "#008900",
  error: "#e43d3d",
  black: "#1e1e1e",
  lightBlack: "#2f2f2f",
  gray: "#666666",
  white: "#ffffff",
};

const createAppTheme = (mode = "light") => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: colors.lightPrimary,
      },
      success: {
        main: colors.success,
      },
      error: {
        main: colors.error,
      },
      background: {
        default: isDark ? colors.black : colors.white,
        paper: isDark ? colors.lightBlack : colors.white,
      },
      text: {
        primary: isDark ? colors.white : colors.black,
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            backgroundColor: isDark ? colors.black : colors.white,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
  });
};

export { colors, createAppTheme };
