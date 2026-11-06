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
    breakpoints: {
      values: { xs: 0, sm: 351, md: 600, lg: 900, xl: 1236 },
    },
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
      fontSize: 12,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-display: swap;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/montserrat-v25-latin-regular.woff2') format('woff2');
          }
          @font-face {
            font-display: swap;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            src: url('/fonts/montserrat-v25-latin-500.woff2') format('woff2');
          }
          @font-face {
            font-display: swap;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            src: url('/fonts/montserrat-v25-latin-600.woff2') format('woff2');
          }
          @font-face {
            font-display: swap;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            src: url('/fonts/montserrat-v25-latin-700.woff2') format('woff2');
          }
          html, body, #__next {
            min-height: 100%;
          }
          body {
            margin: 0;
            background-color: ${isDark ? colors.black : colors.white};
          }
          #__next {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
            align-items: center;
          }
          input, textarea, button {
            font-family: inherit;
          }
        `,
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
