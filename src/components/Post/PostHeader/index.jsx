import { useState } from "react";
import Link from "next/link";
import ProfilePhoto from "@components/ProfilePhoto";
import HeaderFeatures from "../HeaderFeatures";
import styles from "./styles.module.css";

const PostHeader = ({
  id,
  author,
  createdAt,
  isAReply,
  onDeletePost,
  darkTheme,
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  // const dateFormat = getDateFormat(createdAt);
  const dateFormat = createdAt;
  const userId = 1;

  // const onClickShowFeatures = (e) => {
  //   e.stopPropagation();
  //   setShowFeatures(!showFeatures);
  // };

  // const onClickDeleteBtn = async () => {
  //   if (isAReply) {
  //     await isAReply.onDeleteReply(id);
  //   } else {
  //     await onDeletePost(id);
  //   }
  // };

  // const onClickLink = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <header
      className={`${styles["post__header"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      <ProfilePhoto photoUrl={author.profile_photo} />

      <span className={styles["header__nickname"]}>{author.nickname}</span>

      <Link
        className={styles["header__link"]}
        // onClick={onClickLink}
        href={`/profile/${author.id}`}
      >
        <span className={styles["header__username"]}>@{author.username}</span>
      </Link>

      <span className={styles["header__time"]}>{dateFormat}</span>

      {author.id === userId && <HeaderFeatures showFeatures={showFeatures} />}
    </header>
  );
};

export default PostHeader;
