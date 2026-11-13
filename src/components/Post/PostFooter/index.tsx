import { useCallback, useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { UserContext } from "@context/userContext";
import { ListeningSocketContext } from "@context/listeningSocketContext";
import FooterOption from "../FooterOption";
import api from "@utils/api";
import type { ApiRequest } from "@app-types/api";
import type { Like } from "@app-types/domain";
import type { ReplyContext } from "@app-types/ui";
import type { MouseEvent } from "react";

const PostFooter = ({
  id,
  likes = [] as Like[],
  replies = [] as { replying_to_post: number }[],
  isAReply,
  isHomeOrProfilePage,
  onClickReply,
}: {
  id: number;
  likes?: Like[];
  replies?: { replying_to_post: number }[];
  isAReply?: ReplyContext;
  isHomeOrProfilePage: boolean;
  onClickReply?: () => void;
}) => {
  const { userId } = useContext(UserContext);
  const { socketData } = useContext(ListeningSocketContext);
  const [numberReplies, setNumberReplies] = useState(replies.length);
  const [numberLikes, setNumberLikes] = useState(likes.length);
  const [haveLike, setHaveLike] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const getLikedPostFromUser = useCallback(async () => {
    const response = await api<Like[] | { data: Like[] }>({
      method: "GET",
      route: `like/${userId}?page=1&limit=100`,
    });

    return Array.isArray(response) ? response : "data" in response ? response.data : [];
  }, [userId]);

  const hasUserLiked = useCallback(async () => {
    const likedPostsFromUser = await getLikedPostFromUser();

    return likedPostsFromUser.some((like) => {
      if (isAReply) {
        return like.reply_id === id;
      }

      return like.post_id === id;
    });
  }, [getLikedPostFromUser, id, isAReply]);

  const updateNumberReplies = useCallback(
    (newReply) => {
      if (!isAReply && newReply.replying_to_post === id) {
        setNumberReplies((currentNumber) => currentNumber + 1);
      }
    },
    [id, isAReply]
  );

  const updateNumberLikes = useCallback(
    (data: Like, type: "like" | "dislike") => {
      if (data.user_id !== userId) {
        if (
          (isAReply && data.type === "reply" && data.message_id === id) ||
          (!isAReply && data.type === "post" && data.message_id === id)
        ) {
          if (type === "dislike") {
            setNumberLikes((currentNumber) => Math.max(0, currentNumber - 1));
          } else {
            setNumberLikes((currentNumber) => currentNumber + 1);
          }
        }
      }
    },
    [id, isAReply, userId]
  );

  useEffect(() => {
    (async () => {
      if (userId) {
        setHaveLike(await hasUserLiked());
      }
    })();
  }, [hasUserLiked, userId]);

  useEffect(() => {
    const { newReply, newLike, newDislike } = socketData;

    if (newReply) {
      updateNumberReplies(newReply);
    } else if (newLike) {
      updateNumberLikes(newLike, "like");
    } else if (newDislike) {
      updateNumberLikes(newDislike, "dislike");
    }
  }, [socketData, updateNumberLikes, updateNumberReplies]);

  const onClickLikeBtn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    let newNumberLikes = numberLikes;

    const request: ApiRequest & { body: Record<string, unknown> } = {
      method: "POST",
      route: "like",
      body: {
        user_id: userId,
        message_id: id,
      },
      type: "application/json",
    };

    const requestBody = request.body as Record<string, unknown>;

    if (!!isAReply) {
      requestBody.type = "reply";
    } else {
      requestBody.type = "post";
    }

    if (haveLike) {
      newNumberLikes -= 1;
      request.method = "DELETE";
    } else {
      newNumberLikes += 1;
      request.method = "POST";
    }

    setIsLiking(true);
    const response = await api(request);
    setIsLiking(false);

    if (response.error) return;

    setNumberLikes(newNumberLikes);
    setHaveLike(!haveLike);
  };

  return (
    <Stack
      component="footer"
      direction="row"
      spacing={1}
      sx={{ justifyContent: "flex-end" }}
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
        disabled={isLiking}
      />
    </Stack>
  );
};

export default PostFooter;
