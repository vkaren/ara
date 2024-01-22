import { useContext, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import EditOption from "./EditOption";
import DarkModeOption from "./DarkModeOption";
import DeleteOption from "./DeleteOption";
import DeleteAccountModal from "./DeleteAccountModal";
import styles from "./styles.module.css";

const Settings = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  // const onDelete = () => setIsDeletingAccount(true);

  return (
    <>
      <section
        className={`${styles["settings-section"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <h2 className={styles["settings-section__title"]}>Settings</h2>

        <ul className={styles["settings-section__options"]}>
          <EditOption styles={styles} />

          <DarkModeOption
            toggleDarkTheme={toggleDarkTheme}
            darkTheme={darkTheme}
            styles={styles}
          />

          <DeleteOption
            //  onDelete={onDelete}
            styles={styles}
          />
        </ul>
      </section>

      {isDeletingAccount && (
        <DeleteAccountModal
          // onCancelDeleteAccount={onCancelDeleteAccount}
          darkTheme={darkTheme}
        />
      )}
    </>
  );
};

export default Settings;
