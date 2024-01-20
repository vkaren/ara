import Link from "next/link";
import ProfilePhoto from "@components/ProfilePhoto";
import styles from "./styles.module.css";

const NotifInfo = ({ notifFrom, postId, type, seen, darkTheme }) => {
  const getNotifMessage = () => {
    if (type === "like") {
      return `${notifFrom.username} liked your post.`;
    } else if (type === "reply") {
      return `${notifFrom.username} replied your post.`;
    } else if (type === "follow") {
      return `${notifFrom.username} followed you.`;
    }
  };

  return (
    <li
      className={`${styles["notif-info"]} ${!seen && styles["not-seen"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      <Link
        className={styles["notif-info__link"]}
        href={postId ? `post/${postId}` : `profile/${notifFrom.id}`}
      >
        <div className={styles["notif-info__photo"]}>
          {<ProfilePhoto photoUrl={notifFrom.profile_photo} />}
        </div>
        <span className={styles["notif-info__msg"]}>{getNotifMessage()}</span>
      </Link>
    </li>
  );
};

export default NotifInfo;
