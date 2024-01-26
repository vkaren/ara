import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const FooterOption = ({ type, text, haveLike, onClick }) => {
  let className = `${styles[`${type}_icon`]} ${
    haveLike && styles["post_liked"]
  }`;

  if (type === "like") {
    if (haveLike) {
      className += " fillLgtPurple";
    } else {
      className += " fillBlack strLgtPurple";
    }
  }

  return (
    <div
      onClick={onClick}
      className={`${styles["footer__option"]} clrLgtPurple`}
    >
      <IconComponent name={type} className={className} />
      <span>{text}</span>
    </div>
  );
};

export default FooterOption;
