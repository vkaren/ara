import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "@context/themeContext";
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
  const isHomeOrProfilePage =
    router.asPath.includes("home") || router.asPath.includes("profile");

  const { darkTheme } = useContext(ThemeContext);
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
        //  ${
        //   darkTheme && styles["dark-mode"]
        id={`${!!isAReply ? "reply" : "post"}-${id}`}
        className={`${styles["post-container"]} ${
          !!isAReply && styles["reply"]
        } ${isHomeOrProfilePage && styles["link"]}`}
        role="button"
        onClick={onClickPost}
      >
        <PostHeader
          id={id}
          author={author}
          createdAt={createdAt}
          isAReply={isAReply}
          onDeletePost={onDeletePost}
          darkTheme={darkTheme}
        />

        <PostContent
          id={id}
          content={content}
          replyingToUser={isAReply?.replyingToUser}
          isHomeOrProfilePage={isHomeOrProfilePage}
          darkTheme={darkTheme}
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
          darkTheme={darkTheme}
        />
      </article>

      {isReplying && (
        <ReplyBox
          replyingToPost={!!isAReply ? isAReply.replyingToPost : id}
          replyingToUser={author.id}
          darkTheme={darkTheme}
          onCancelReply={toggleReplyModal}
        />
      )}
    </>
  );
};

export default Post;
