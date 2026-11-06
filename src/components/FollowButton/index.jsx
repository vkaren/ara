import { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { UserContext } from "@context/userContext";
import api from "@utils/api";

const FollowButton = ({ userIdToFollow, updateNumberFollowers, type }) => {
  const { userId, hasFollowedUser } = useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkIsFollowing = async () => {
      if (type === "people-tf") {
        setIsFollowing(false);
      } else if (userId) {
        setIsFollowing(await hasFollowedUser(userIdToFollow));
      }
    };

    checkIsFollowing();
  }, [hasFollowedUser, type, userId, userIdToFollow]);

  const onClickFollowBtn = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let type = "";

    if (isFollowing) {
      type = "unfollow";
    } else {
      type = "follow";
    }

    setIsLoading(true);
    const succeeded = await followOrUnfollowUser(type);
    setIsLoading(false);

    if (!succeeded) return;

    if (updateNumberFollowers) {
      updateNumberFollowers(type);
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

    const response = await api(request);
    return !response.error;
  };

  return (
    <Button
      onClick={onClickFollowBtn}
      disabled={isLoading || isFollowing === undefined}
      variant={isFollowing ? "outlined" : "contained"}
      color="primary"
      size="small"
      sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
    >
      {isLoading ? "Loading..." : isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
