import Link from "next/link";
import ProfilePhoto from "@components/ProfilePhoto";
import FollowButton from "@components/FollowButton";

const User = ({
  id,
  nickname,
  username,
  profilePhoto,
  styles,
  className,
  darkTheme,
}) => {
  return (
    <Link
      className={`${styles[`${className}__link`]} ${
        darkTheme && styles["dark-mode"]
      }`}
      href={`/profile/${id}`}
    >
      <article className={styles[className]}>
        <ProfilePhoto photoUrl={profilePhoto} />
        <span className={`${styles[`${className}__nickname`]}`}>
          {nickname}
        </span>
        <span className={`${styles[`${className}__username`]}`}>
          @{username}
        </span>
        <FollowButton followTo={id} />
      </article>
    </Link>
  );
};

export default User;
