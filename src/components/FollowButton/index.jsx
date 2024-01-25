import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "@context/themeContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import styles from "./styles.module.css";

const FollowButton = ({ userIdToFollow, isFollowingUser }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { userId } = useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState();

  useEffect(() => setIsFollowing(isFollowingUser), [isFollowingUser]);

  const onClickFollowBtn = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFollowing) {
      await followOrUnfollowUser("unfollow");
    } else {
      await followOrUnfollowUser("follow");
    }

    setIsFollowing(!isFollowing);
  };

  const followOrUnfollowUser = async (type) => {
    const request = {
      route: "follow",
      body: {
        follow_from: userId,
        follow_to: userIdToFollow,
      },
      type: "application/json",
    };

    if (type === "follow") {
      request.method = "POST";
    } else if (type === "unfollow") {
      request.method = "DELETE";
    }

    await api(request);
  };

  return (
    <button
      onClick={onClickFollowBtn}
      className={`${styles["user_follow-btn"]} ${
        isFollowing && styles["following"]
      } ${darkTheme && styles["dark-mode"]}`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
