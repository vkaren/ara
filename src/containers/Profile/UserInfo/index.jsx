import { useContext, useState } from "react";
import { UserContext } from "@context/userContext";
import ProfilePhoto from "@components/ProfilePhoto";
import FollowButton from "@components/FollowButton";
import styles from "./styles.module.css";

const UserInfo = ({
  id,
  nickname,
  username,
  profilePhoto,
  followers = [],
  bio,
}) => {
  const { userId } = useContext(UserContext);
  const [numberFollowers, setNumberFollowers] = useState(followers.length);

  const updateNumberFollowers = (type) => {
    if (type === "follow") {
      setNumberFollowers(numberFollowers + 1);
    } else {
      setNumberFollowers(numberFollowers - 1);
    }
  };

  return (
    <div className={`${styles["header__user-info"]} bckgBlack clrWhite`}>
      <div className={styles["header__user-info_top"]}>
        <ProfilePhoto photoUrl={profilePhoto} profilePage={true} />

        <div className={styles["user-info__names"]}>
          <span className={styles["user-info__nickname"]}>{nickname}</span>
          <span className={styles["user-info__username"]}>@{username}</span>
        </div>

        <div className={styles["user-info__follow"]}>
          <span className={styles["user-info__followers"]}>
            {`${numberFollowers} follower${numberFollowers === 1 ? "" : "s"}`}
          </span>

          {userId !== id && (
            <FollowButton
              userIdToFollow={id}
              updateNumberFollowers={updateNumberFollowers}
            />
          )}
        </div>
      </div>

      <div className={styles["header__user-info_bottom"]}>
        <span className={styles["user-info__bio"]}>{bio}</span>
      </div>
    </div>
  );
};

export default UserInfo;
