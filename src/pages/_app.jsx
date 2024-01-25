import { ThemeProvider } from "@context/themeContext";
import { UserProvider } from "@context/userContext";
import { AppProvider } from "@context/appContext";
import { ListeningSocketProvider } from "@context/listeningSocketContext";
import "../global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
