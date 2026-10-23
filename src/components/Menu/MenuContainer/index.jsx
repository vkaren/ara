import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import Option from "../Option";
import List from "@mui/material/List";
import styles from "./styles.module.css";

const MenuContainer = ({ options, isOnMobile }) => {
  return (
    <aside className={`${styles["menu-container"]} bckgBlack clrWhite`}>
      {!isOnMobile && <LogoImage />}

      <List disablePadding className={styles["menu-container__options"]}>
        {options.map((opt) => (
          <Option key={opt} type={opt} />
        ))}
      </List>

      {!isOnMobile && <LogoutButton />}
    </aside>
  );
};

export default MenuContainer;
