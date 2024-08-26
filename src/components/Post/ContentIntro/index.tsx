import styles from "./styles.module.css";

const ContentIntro = ({ contentLetters = [""] }) => {
  return (
    <span className={styles["content_intro"]}>
      {contentLetters.length > 50 ? contentLetters.slice(0, 40).join("") : contentLetters.join("")}
    </span>
  );
};

export default ContentIntro;
