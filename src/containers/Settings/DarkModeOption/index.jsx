import switchStyles from "./styles.module.css";

const DarkModeOption = ({ toggleDarkTheme, darkTheme, styles }) => {
  return (
    <li>
      <label htmlFor="switch" className={styles["settings-option"]}>
        <span className={styles["settings-option__title"]}>Set dark mode</span>

        <div className={switchStyles["settings-option__switch"]}>
          <input
            className={switchStyles["switch-checkbox"]}
            id="switch"
            name="mode"
            type="checkbox"
            aria-label="enable or disable dark mode"
            onChange={toggleDarkTheme}
            checked={darkTheme}
          />
          <span className={switchStyles["switch-slider"]}></span>
        </div>
      </label>
    </li>
  );
};

export default DarkModeOption;
