import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import styles from "./styles.module.css";

const MobileHeader = ({ darkTheme }) => {
  return (
    <header
      className={`${styles["menu-header__mobile"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      <LogoImage darkTheme={darkTheme} />
      <LogoutButton darkTheme={darkTheme} />
    </header>
  );
};

export default MobileHeader;
