import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const Features = ({ onClickDeleteBtn }) => {
  return (
    <>
      <div key="features_container" className={styles["features_container"]}>
        <ul>
          <li
            onClick={onClickDeleteBtn}
            className={`${styles["feature__option"]} ${styles["delete"]}`}
            role="button"
          >
            <IconComponent name="delete" className={styles["option_icon"]} />
            <span>Delete</span>
          </li>
        </ul>
      </div>
      <div
        key="features_overlay"
        className={styles["features_overlay"]}
        role="button"
      ></div>
    </>
  );
};

export default Features;
