import { useRouter } from "next/router";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const NavBack = ({ prevRoute }) => {
  const router = useRouter();

  const onClickBack = () => {
    if (prevRoute) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  return (
    <nav className={`${styles["post-nav"]} bckgBlack`}>
      <button onClick={onClickBack} className={styles["post-nav__back"]}>
        <IconComponent
          name="arrow"
          className={`${styles["back__icon"]} fillWhite`}
        />
      </button>
    </nav>
  );
};

export default NavBack;
