import { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "@context/themeContext";

const DarkModeOption = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <ListItem
      secondaryAction={
        <Switch
          checked={Boolean(darkTheme)}
          onChange={toggleDarkTheme}
          aria-label="Enable or disable dark mode"
        />
      }
      sx={{ borderRadius: 2 }}
    >
      <ListItemText primary="Set dark mode" />
    </ListItem>
  );
};

export default DarkModeOption;
