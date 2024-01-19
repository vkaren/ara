import Image from "next/image";
import Link from "next/link";
import iconLogo from "@icons/icon-logo.png";
import iconLogoDarkMode from "@icons/icon-logo-darkmode.png";
import styles from "./styles.module.css";

const LogoImage = ({ darkTheme }) => {
  return (
    <Link className={`${styles["logo"]} `} href="/home">
      <div className={styles["logo__image"]}>
        <Image src={darkTheme ? iconLogoDarkMode : iconLogo} alt="Logo" />
      </div>
    </Link>
  );
};

export default LogoImage;
