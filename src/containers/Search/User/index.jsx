import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@context/userContext";
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
  const { userId, getUserFollowingList } = useContext(UserContext);
  const [isFollowingUser, setIsFollowingUser] = useState(null);

  useEffect(() => {
    checkIsFollowingUser();
  }, [userId]);

  const checkIsFollowingUser = async () => {
    if (className === "people-tf") {
      setIsFollowingUser(false);
    } else {
      const userFollowingList = await getUserFollowingList();
      setIsFollowingUser(
        userFollowingList.some((user) => user.follow_to === id)
      );
    }
  };

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
        <FollowButton userIdToFollow={id} isFollowingUser={isFollowingUser} />
      </article>
    </Link>
  );
};

export default User;
