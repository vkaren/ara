import styles from "./styles.module.css";

const FullContent = ({ onClickShowMore, showMore, contentLetters }) => {
  return (
    <>
      <div
        onClick={onClickShowMore}
        className={`${styles["content__show-more"]} ${showMore && styles["show"]}`}
        role="button"
      >
        <span className={styles["show-more__dots"]}>...</span>
        <span className={`${styles["show__span"]} clrLgtPurple`}>Show more</span>
      </div>

      <span className={`${styles["content__complete"]} ${showMore && styles["show"]}`}>
        {contentLetters.splice(41).join("")}
      </span>

      <div
        onClick={onClickShowMore}
        className={`${styles["content__show-less"]} ${showMore && styles["show"]}`}
        role="button"
      >
        <span className={`${styles["show__span"]} clrLgtPurple`}>Show less</span>
      </div>
    </>
  );
};

export default FullContent;
