import {
  createContext,
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { setItem, getItem } from "@utils/cookies";

interface ThemeContextValue {
  darkTheme: boolean;
  toggleDarkTheme: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setDarkTheme(getItem("dark_theme") === "true");
  }, []);

  const toggleDarkTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const isDarkTheme = event.currentTarget.checked;

    setDarkTheme(isDarkTheme);
    setItem("dark_theme", isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
