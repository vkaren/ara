import AddComment from "@components/AddComment";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const ReplyBox = ({ replyingToPost, replyingToUser, closeModal }) => (
  <>
    <section className={`${styles["reply-modal"]} `}>
      <button
        onClick={closeModal}
        className={`${styles["reply-modal__cancel"]} bckgLgtPurple`}
      >
        <IconComponent
          name="cancel"
          className={`${styles["cancel_icon"]} fillBlack`}
        />
      </button>

      <AddComment
        isAReply={{
          replyingToPost,
          replyingToUser,
          closeModal,
        }}
      />
    </section>

    <div
      onClick={closeModal}
      className={styles["modal-overlay"]}
      role="button"
    ></div>
  </>
);
export default ReplyBox;
