import { useContext, useMemo } from "react";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeContext, ThemeProvider } from "@context/themeContext";
import { UserProvider } from "@context/userContext";
import { AppProvider } from "@context/appContext";
import { ListeningSocketProvider } from "@context/listeningSocketContext";
import { createAppTheme } from "@theme";
import "../global.css";

function AppTheme({ children }) {
  const { darkTheme } = useContext(ThemeContext);
  const theme = useMemo(
    () => createAppTheme(darkTheme ? "dark" : "light"),
    [darkTheme]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function MyApp({ Component, pageProps, ...props }) {
  return (
    <AppCacheProvider {...props}>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <ThemeProvider>
        <AppTheme>
          {Component.name === "LoginPage" || Component.name === "SignUpPage" ? (
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          ) : (
            <AppProvider>
              <UserProvider>
                <ListeningSocketProvider>
                  <Component {...pageProps} />
                </ListeningSocketProvider>
              </UserProvider>
            </AppProvider>
          )}
        </AppTheme>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
