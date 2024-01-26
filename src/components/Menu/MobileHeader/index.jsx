import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import styles from "./styles.module.css";

const MobileHeader = () => {
  return (
    <header className={`${styles["menu-header__mobile"]} bckgBlack`}>
      <LogoImage />
      <LogoutButton />
    </header>
  );
};

export default MobileHeader;
