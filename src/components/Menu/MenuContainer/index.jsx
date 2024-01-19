import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import Option from "../Option";
import styles from "./styles.module.css";

const MenuContainer = ({ darkTheme, options, isOnMobile }) => {
  return (
    <aside
      className={`${styles["menu-container"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      {!isOnMobile && <LogoImage darkTheme={darkTheme} />}

      <ul className={styles["menu-container__options"]}>
        {options.map((opt) => (
          <Option key={opt} type={opt} />
        ))}
      </ul>

      {!isOnMobile && <LogoutButton darkTheme={darkTheme} />}
    </aside>
  );
};

export default MenuContainer;
