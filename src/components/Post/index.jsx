import { useState } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
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

  const toggleReplyModal = () => {
    setIsReplying(!isReplying);
  };

  return (
    <>
      <Card
        component="article"
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
        }}
      >
        <PostHeader
          id={id}
          author={author}
          createdAt={createdAt}
          isAReply={isAReply}
          onDeletePost={onDeletePost}
        />

        {isHomeOrProfilePage ? (
          <CardActionArea
            onClick={onClickPost}
            aria-label={`Open post by ${author.nickname}`}
            sx={{
              display: "block",
              textAlign: "left",
              borderRadius: 1,
              p: 0.5,
            }}
          >
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
          </CardActionArea>
        ) : (
          <Box>
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
          </Box>
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
