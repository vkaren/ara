import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const FileUploaded = ({ file }) => {
  return (
    <div className={styles["field__file"]}>
      <IconComponent name="upload" className={styles["file_icon"]} />
      <span className={styles["file_name"]}>{file}</span>
    </div>
  );
};

export default FileUploaded;
