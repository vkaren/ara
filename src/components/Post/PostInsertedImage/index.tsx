import Image from "next/image";
import styles from "./styles.module.css";

const PostInsertedImage = ({ insertedImage, isHomeOrProfilePage }) => {
  return (
    <div className={`${styles["post__inserted-image"]}  ${!isHomeOrProfilePage && styles["full"]}`}>
      <Image className={styles["inserted-image"]} src={insertedImage} alt="post content" fill />
    </div>
  );
};

export default PostInsertedImage;
