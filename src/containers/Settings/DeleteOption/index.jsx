import IconComponent from "@components/Icon";

const DeleteOption = ({ onDelete, styles }) => {
  return (
    <li
      // onClick={onDelete}
      className={`${styles["settings-option"]} ${styles["delete-option"]}`}
    >
      <span className={styles["settings-option__title"]}>Delete account</span>
      <IconComponent
        name="delete"
        className={styles["settings-option__icon"]}
      />
    </li>
  );
};

export default DeleteOption;
