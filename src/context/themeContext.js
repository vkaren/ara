import { createContext, useEffect, useState } from "react";
import { setItem, getItem } from "@utils/cookies";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const darkThemeStorage = getItem("dark_theme");

    setDarkTheme(darkThemeStorage);
  }, []);

  const toggleDarkTheme = (e) => {
    const isDarkTheme = e.currentTarget.checked;

    setDarkTheme(isDarkTheme);
    setItem("dark_theme", isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
