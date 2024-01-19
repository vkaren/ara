import styles from "./styles.module.css";

const ContentIntro = ({ content = "", contentLetters = "" }) => {
  return (
    <span className={styles["content_intro"]}>
      {content.length > 50 ? contentLetters.splice(0, 40).join("") : content}
    </span>
  );
};

export default ContentIntro;
