import { useState } from "react";
import { useRouter } from "next/router";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostInsertedImage from "./PostInsertedImage";
import PostFooter from "./PostFooter";
import ReplyBox from "./ReplyBox";
import styles from "./styles.module.css";

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
  const isHomeOrProfilePage = router.asPath.includes("home") || router.asPath.includes("profile");

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
      <article
        id="hover"
        className={`${styles["post-container"]} ${!!isAReply && styles["reply"]} ${
          isHomeOrProfilePage && styles["link"]
        } bckgBlack clrWhite hoverBlack`}
        role="button"
        onClick={onClickPost}
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
      </article>

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
