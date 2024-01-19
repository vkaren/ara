import { useState } from "react";
import FooterOption from "../FooterOption";
import styles from "./styles.module.css";

const PostFooter = ({
  id,
  likes = [],
  replies = [],
  onClickReply,
  isAReply,
  isHomeOrProfilePage = true,
  darkTheme,
}) => {
  // const {
  //   newReply,
  //   newLike,
  //   newDislike,
  //   setNewReply,
  //   setNewLike,
  //   setNewDislike,
  //   onLikePostOrReply,
  // } = useContext(AppContext);
  const [repliesQuantity, setRepliesQuantity] = useState(replies.length);
  const [likesQuantity, setLikesQuantity] = useState(likes.length);
  const [haveLike, setHaveLike] = useState(false);

  // useEffect(() => {
  //   if (userLikes) {
  //     setHaveLike(userLikedPost());
  //   }
  // }, [userLikes]);

  // useEffect(() => {
  //   if (!isAReply && newReply?.replying_to_post === id) {
  //     setRepliesQuantity(repliesQuantity + 1);
  //     setNewReply(null);
  //   }
  // }, [newReply]);

  // useEffect(() => {
  //   if (newLike) {
  //     updateLikeQuantity(newLike, "like");
  //     setNewLike(null);
  //   }
  // }, [newLike]);

  // useEffect(() => {
  //   if (newDislike) {
  //     updateLikeQuantity(newDislike, "dislike");
  //     setNewDislike(null);
  //   }
  // }, [newDislike]);

  // const updateLikeQuantity = (newLikeInfo, type) => {
  //   if (newLikeInfo && newLikeInfo.user_id !== userId) {
  //     if (
  //       (isAReply &&
  //         newLikeInfo.type === "reply" &&
  //         newLikeInfo.message_id === id) ||
  //       (!isAReply &&
  //         newLikeInfo.type === "post" &&
  //         newLikeInfo.message_id === id)
  //     ) {
  //       if (type === "dislike") {
  //         setLikesQuantity(likesQuantity - 1);
  //       } else {
  //         setLikesQuantity(likesQuantity + 1);
  //       }
  //     }
  //   }
  // };

  // const userLikedPost = () => {
  //   const likedPostsFromUser = [...userLikes];

  //   return likedPostsFromUser.some((like) => {
  //     if (isAReply) {
  //       return like.reply_id === id;
  //     } else {
  //       return like.post_id === id;
  //     }
  //   });
  // };

  // const onClickLikeBtn = async (e) => {
  //   e.stopPropagation();

  //   const data = {
  //     message_id: id,
  //   };

  //   if (isAReply) {
  //     data.type = "reply";
  //   } else {
  //     data.type = "post";
  //   }

  //   const userLikesPost = !haveLike;

  //   if (userLikesPost) {
  //     await onLikePostOrReply({ data, type: "like" });
  //     setLikesQuantity(likesQuantity + 1);
  //   } else {
  //     await onLikePostOrReply({ data, type: "dislike" });
  //     setLikesQuantity(likesQuantity - 1);
  //   }

  //   setHaveLike(userLikesPost);
  // };

  return (
    <footer
      className={`${styles["post__footer"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      {isHomeOrProfilePage ? (
        <FooterOption
          type={"comment"}
          text={repliesQuantity}
          classNameIcon={styles["comment_icon"]}
        />
      ) : (
        <FooterOption
          type={"reply"}
          text={"Reply"}
          classNameIcon={styles["reply_icon"]}
        />
      )}

      <FooterOption type={"like"} text={likesQuantity} haveLike={haveLike} />
    </footer>
  );
};

export default PostFooter;
