import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const FooterOption = ({ type, text, haveLike, onClick }) => {
  return (
    <div onClick={onClick} className={styles["footer__option"]}>
      <IconComponent
        name={type}
        className={`${styles[`${type}_icon`]} ${
          haveLike && styles["post_liked"]
        }`}
      />
      <span>{text}</span>
    </div>
  );
};

export default FooterOption;
