import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const HeaderFeatures = ({ showFeatures }) => {
  return (
    <div
      //   onClick={onClickShowFeatures}
      className={styles["header__features"]}
      role="button"
    >
      <IconComponent name="features" className={styles["features_icon"]} />

      {showFeatures && [
        <div key="features_container" className={styles["features_container"]}>
          <ul>
            <li
              //   onClick={onClickDeleteBtn}
              className={`${styles["feature__option"]} ${styles["delete"]}`}
              role="button"
            >
              <IconComponent name="delete" className={styles["option_icon"]} />
              <span>Delete</span>
            </li>
          </ul>
        </div>,

        <div
          key="features_overlay"
          //   onClick={onClickShowFeatures}
          className={styles["features_overlay"]}
          role="button"
        ></div>,
      ]}
    </div>
  );
};

export default HeaderFeatures;
