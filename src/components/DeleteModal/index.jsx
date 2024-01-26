import styles from "./styles.module.css";

const DeleteModal = ({ type, onDelete, onCancelDelete }) => {
  return (
    <>
      <section className={`${styles["delete_section"]} bckgLgtBlack clrWhite`}>
        <h2>Delete {type}</h2>
        <p>Are you sure do you want to delete your {type}?</p>

        <div className={styles["delete_options"]}>
          <button
            className={styles["delete_cancel-btn"]}
            onClick={onCancelDelete}
          >
            NO, CANCEL
          </button>

          <button className={styles["delete_accept-btn"]} onClick={onDelete}>
            YES, DELETE
          </button>
        </div>
      </section>

      <div className={styles["delete_overlay"]} onClick={onCancelDelete}></div>
    </>
  );
};

export default DeleteModal;
