import { useRouter } from "next/router";
import LogoutIcon from "@icons/icon-logout.svg";
import styles from "./styles.module.css";

const LogoutButton = ({ darkTheme }) => {
  const router = useRouter();

  const onLogOut = async () => {
    // removeUserId();

    router.push("/login");
  };
  return (
    <button
      onClick={onLogOut}
      className={`${styles["logout-btn"]} ${darkTheme && styles["dark-mode"]}`}
    >
      <span className={styles["logout__title"]}>Log out</span>

      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;
