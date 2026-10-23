import { useState } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostInsertedImage from "./PostInsertedImage";
import PostFooter from "./PostFooter";
import ReplyBox from "./ReplyBox";

const Post = ({
  id,
  author,
  createdAt,
  content,
  insertedImage,
  likes,
  replies,
  isAReply,
  onDeletePost,
}) => {
  const router = useRouter();
  const isHomeOrProfilePage =
    router.asPath.includes("home") || router.asPath.includes("profile");

  const [isReplying, setIsReplying] = useState(false);

  const onClickPost = () => {
    if (isHomeOrProfilePage) {
      router.push(`/post/${id}`);
    }
  };

  const onPostKeyDown = (event) => {
    if (isHomeOrProfilePage && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClickPost();
    }
  };

  const toggleReplyModal = () => {
    setIsReplying(!isReplying);
  };

  return (
    <>
      <Card
        component="article"
        onClick={onClickPost}
        onKeyDown={onPostKeyDown}
        role={isHomeOrProfilePage ? "button" : undefined}
        tabIndex={isHomeOrProfilePage ? 0 : undefined}
        sx={{
          position: "relative",
          width: { xs: "calc(100% - 2rem)", sm: isAReply ? "85%" : "75%" },
          maxWidth: 600,
          minWidth: { xs: 0, sm: isAReply ? 280 : 300 },
          p: 2,
          border: 1,
          borderColor: "primary.main",
          borderRadius: 2,
          overflow: "visible",
          cursor: isHomeOrProfilePage ? "pointer" : "default",
          "&:hover": isHomeOrProfilePage
            ? { backgroundColor: "action.hover" }
            : undefined,
        }}
      >
        <PostHeader
          id={id}
          author={author}
          createdAt={createdAt}
          isAReply={isAReply}
          onDeletePost={onDeletePost}
        />

        <PostContent
          id={id}
          content={content}
          replyingToUser={isAReply?.replyingToUser}
          isHomeOrProfilePage={isHomeOrProfilePage}
        />

        {insertedImage && (
          <PostInsertedImage
            insertedImage={insertedImage}
            isHomeOrProfilePage={isHomeOrProfilePage}
          />
        )}

        <PostFooter
          id={id}
          likes={likes}
          replies={replies}
          isAReply={isAReply}
          onClickReply={toggleReplyModal}
          isHomeOrProfilePage={isHomeOrProfilePage}
        />
      </Card>

      {isReplying && (
        <ReplyBox
          replyingToPost={!!isAReply ? isAReply.replyingToPost : id}
          replyingToUser={author.id}
          closeModal={toggleReplyModal}
        />
      )}
    </>
  );
};

export default Post;
