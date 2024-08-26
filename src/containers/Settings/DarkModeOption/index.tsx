import { useContext } from "react";
// import { ThemeContext } from "@context/themeContext";
import switchStyles from "./styles.module.css";

const DarkModeOption = ({ styles }) => {
  // const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <li>
      <label
        htmlFor="switch"
        id="hover"
        className={`${styles["settings-option"]} clrWhite hoverBlack`}
      >
        <span className={styles["settings-option__title"]}>Set dark mode</span>

        <div className={switchStyles["settings-option__switch"]}>
          <input
            className={switchStyles["switch-checkbox"]}
            id="switch"
            name="mode"
            type="checkbox"
            aria-label="enable or disable dark mode"
            // onChange={toggleDarkTheme}
            // defaultChecked={darkTheme}
          />
          <span className={switchStyles["switch-slider"]}></span>
        </div>
      </label>
    </li>
  );
};

export default DarkModeOption;
