import { useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "@context/themeContext";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const NavBack = ({ prevRoute }) => {
  const router = useRouter();
  const { darkTheme } = useContext(ThemeContext);

  const onClickBack = () => {
    if (prevRoute) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  return (
    <nav
      className={`${styles["post-nav"]} ${darkTheme && styles["dark-mode"]}`}
    >
      <button onClick={onClickBack} className={styles["post-nav__back"]}>
        <IconComponent name="arrow" className={styles["back__icon"]} />
      </button>
    </nav>
  );
};

export default NavBack;
