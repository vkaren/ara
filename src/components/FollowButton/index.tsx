import { useState, useContext, useEffect } from "react";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import styles from "./styles.module.css";

const FollowButton = ({ userIdToFollow, updateNumberFollowers, type }) => {
  // const { userId, hasFollowedUser } = useContext(UserContext);
  // const [isFollowing, setIsFollowing] = useState();

  // useEffect(() => {
  //   checkIsFollowingUser();
  // }, [userId]);

  // const checkIsFollowingUser = async () => {
  //   if (type === "people-tf") {
  //     setIsFollowing(false);
  //   } else if (userId) {
  //     setIsFollowing(await hasFollowedUser(userIdToFollow));
  //   }
  // };

  // const onClickFollowBtn = async e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let type = "";

  //   if (isFollowing) {
  //     type = "unfollow";
  //   } else {
  //     type = "follow";
  //   }

  //   await followOrUnfollowUser(type);

  //   if (updateNumberFollowers) {
  //     updateNumberFollowers(type);
  //   }

  //   setIsFollowing(!isFollowing);
  // };

  // const followOrUnfollowUser = async type => {
  //   const request = {
  //     route: "follow",
  //     body: {
  //       follow_from: userId,
  //       follow_to: userIdToFollow,
  //     },
  //     type: "application/json",
  //   };

  //   if (type === "follow") {
  //     request.method = "POST";
  //   } else if (type === "unfollow") {
  //     request.method = "DELETE";
  //   }

  //   await api(request);
  // };

  return (
    <button
      // onClick={onClickFollowBtn}
      id="hover"
      className={`${styles["user_follow-btn"]} ${
        isFollowing && `${styles["following"]} bckgGray clrWhite hoverBlack`
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
