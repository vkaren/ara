"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { globalStyles, theme } from "./theme";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles()}
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootLayout;
