import AddComment from "@components/AddComment";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const ReplyBox = ({
  replyingToPost,
  replyingToUser,
  onCancelReply,
  darkTheme,
}) => (
  <>
    <section
      className={`${styles["reply-modal"]} ${darkTheme && styles["dark-mode"]}`}
    >
      <button onClick={onCancelReply} className={styles["reply-modal__cancel"]}>
        <IconComponent name="cancel" className={styles["cancel_icon"]} />
      </button>

      <AddComment isAReply={{ replyingToPost, replyingToUser }} />
    </section>

    <div
      onClick={onCancelReply}
      className={styles["modal-overlay"]}
      role="button"
    ></div>
  </>
);
export default ReplyBox;
