import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@context/userContext";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const LogoutButton = ({ darkTheme }) => {
  const router = useRouter();
  const { removeUserInfo } = useContext(UserContext);

  const onLogOut = async () => {
    removeUserInfo();
    router.push("/login");
  };
  return (
    <button
      onClick={onLogOut}
      className={`${styles["logout-btn"]} ${darkTheme && styles["dark-mode"]}`}
    >
      <span className={styles["logout__title"]}>Log out</span>

      <IconComponent name={"logout"} />
    </button>
  );
};

export default LogoutButton;
