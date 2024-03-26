import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import styles from "./styles.module.css";

const MobileNavbar = () => {
  return (
    <nav className={`${styles["menu-nav__mobile"]} bckgBlack`}>
      <LogoImage />
      <LogoutButton />
    </nav>
  );
};

export default MobileNavbar;
