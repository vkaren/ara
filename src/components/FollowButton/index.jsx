import { useState, useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import styles from "./styles.module.css";

const FollowButton = ({ followTo, updateFollowers }) => {
  const { darkTheme } = useContext(ThemeContext);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      // onClick={onClickFollowBtn}
      className={`${styles["user_follow-btn"]} ${
        isFollowing && styles["following"]
      } ${darkTheme && styles["dark-mode"]}`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
