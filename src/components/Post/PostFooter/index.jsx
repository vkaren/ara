import { useContext, useEffect, useState } from "react";
import { UserContext } from "@context/userContext";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import FooterOption from "../FooterOption";
import api from "@utils/api";
import styles from "./styles.module.css";

const PostFooter = ({
  id,
  likes = [],
  replies = [],
  isAReply,
  isHomeOrProfilePage,
  onClickReply,
  darkTheme,
}) => {
  const { userId } = useContext(UserContext);
  const { socketData } = useContext(ListeningSocketContext);
  const [numberReplies, setNumberReplies] = useState(replies.length);
  const [numberLikes, setNumberLikes] = useState(likes.length);
  const [haveLike, setHaveLike] = useState(false);

  useEffect(() => {
    (async () => {
      if (userId) {
        setHaveLike(await hasUserLiked());
      }
    })();
  }, [userId]);

  useEffect(() => {
    const { newReply, newLike, newDislike } = socketData;

    if (newReply) {
      updateNumberReplies(newReply);
    } else if (newLike) {
      updateNumberLikes(newLike, "like");
    } else if (newDislike) {
      updateNumberLikes(newDislike, "dislike");
    }
  }, [socketData]);

  const getLikedPostFromUser = async () => {
    return await api({ method: "GET", route: `like/${userId}` });
  };

  const hasUserLiked = async () => {
    const likedPostsFromUser = await getLikedPostFromUser();

    return likedPostsFromUser.some((like) => {
      if (isAReply) {
        return like.reply_id === id;
      } else {
        return like.post_id === id;
      }
    });
  };

  const updateNumberReplies = (newReply) => {
    if (!isAReply && newReply.replying_to_post === id) {
      setNumberReplies(numberReplies + 1);
    }
  };

  const updateNumberLikes = (data, type) => {
    if (data.user_id !== userId) {
      if (
        (isAReply && data.type === "reply" && data.message_id === id) ||
        (!isAReply && data.type === "post" && data.message_id === id)
      ) {
        if (type === "dislike") {
          setNumberLikes(numberLikes - 1);
        } else {
          setNumberLikes(numberLikes + 1);
        }
      }
    }
  };

  const onClickLikeBtn = async (e) => {
    e.stopPropagation();

    let newNumberLikes = numberLikes;

    const request = {
      route: "like",
      body: {
        user_id: userId,
        message_id: id,
      },
      type: "application/json",
    };

    if (!!isAReply) {
      request.body.type = "reply";
    } else {
      request.body.type = "post";
    }

    if (haveLike) {
      newNumberLikes -= 1;
      request.method = "DELETE";
    } else {
      newNumberLikes += 1;
      request.method = "POST";
    }

    await api(request);

    setNumberLikes(newNumberLikes);
    setHaveLike(!haveLike);
  };

  return (
    <footer
      className={`${styles["post__footer"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      {isHomeOrProfilePage ? (
        <FooterOption type={"comment"} text={numberReplies} />
      ) : (
        <FooterOption type={"reply"} text={"Reply"} onClick={onClickReply} />
      )}

      <FooterOption
        type={"like"}
        text={numberLikes}
        haveLike={haveLike}
        onClick={onClickLikeBtn}
      />
    </footer>
  );
};

export default PostFooter;
