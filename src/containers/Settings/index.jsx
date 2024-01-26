import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "@context/themeContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import EditOption from "./EditOption";
import DarkModeOption from "./DarkModeOption";
import DeleteOption from "./DeleteOption";
import DeleteModal from "@components/DeleteModal";
import styles from "./styles.module.css";

const Settings = () => {
  const router = useRouter();
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  const { userId, removeUserInfo } = useContext(UserContext);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const toggleDeleteModal = () => setIsDeletingAccount(!isDeletingAccount);

  const onDeleteAccount = async () => {
    const { userDeleted } = await api({
      method: "DELETE",
      route: `user/${userId}`,
    });

    if (userDeleted) {
      removeUserInfo();
      router.push("/");
    }
  };

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

          <DeleteOption onDelete={toggleDeleteModal} styles={styles} />
        </ul>
      </section>

      {isDeletingAccount && (
        <DeleteModal
          type="account"
          onDelete={onDeleteAccount}
          onCancelDelete={toggleDeleteModal}
          darkTheme={darkTheme}
        />
      )}
    </>
  );
};

export default Settings;
