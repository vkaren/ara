import { useContext, useState } from "react";
import Link from "next/link";
import getDateFormat from "@utils/getDateFormat";
import { UserContext } from "@context/userContext";
import ProfilePhoto from "@components/ProfilePhoto";
import HeaderFeatures from "../HeaderFeatures";
import styles from "./styles.module.css";

const PostHeader = ({ id, author, createdAt, isAReply, darkTheme }) => {
  const { userId } = useContext(UserContext);
  const dateFormat = getDateFormat(createdAt);

  const onClickLink = (e) => {
    e.stopPropagation();
  };

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
        onClick={onClickLink}
        href={`/profile/${author.id}`}
      >
        <span className={styles["header__username"]}>@{author.username}</span>
      </Link>

      <span className={styles["header__time"]}>{dateFormat}</span>

      {author.id === userId && (
        <HeaderFeatures id={id} authorId={author.id} isAReply={isAReply} />
      )}
    </header>
  );
};

export default PostHeader;
