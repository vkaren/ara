import { useState } from "react";
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
  const [followersQuantity, setFollowersQuantity] = useState(followers.length);

  return (
    <div className={styles["header__user-info"]}>
      <div className={styles["header__user-info_top"]}>
        <ProfilePhoto photoUrl={profilePhoto} profilePage={true} />

        <div className={styles["user-info__names"]}>
          <span className={styles["user-info__nickname"]}>{nickname}</span>
          <span className={styles["user-info__username"]}>@{username}</span>
        </div>

        <div className={styles["user-info__follow"]}>
          <span className={styles["user-info__followers"]}>
            {`${followersQuantity} follower${
              followersQuantity === 1 ? "" : "s"
            }`}
          </span>

          {
            //userId !== id &&

            <FollowButton
              followTo={id}
              updateFollowers={setFollowersQuantity}
            />
          }
        </div>
      </div>

      <div className={styles["header__user-info_bottom"]}>
        <span className={styles["user-info__bio"]}>{bio}</span>
      </div>
    </div>
  );
};

export default UserInfo;
