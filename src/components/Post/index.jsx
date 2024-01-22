import { useContext, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostInsertedImage from "./PostInsertedImage";
import PostFooter from "./PostFooter";
// import ReplyBox from "./ReplyBox";
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
  // const router = useRouter();
  // const isHomeOrProfilePage =
  //   router.asPath.includes("home") || router.asPath.includes("profile");
  const { darkTheme } = useContext(ThemeContext);
  const [isReplying, setIsReplying] = useState(false);

  // const onClickPost = () => {
  //   if (isHomeOrProfilePage) {
  //     router.push(`/post/${id}`);
  //   }
  // };

  // const onClickReply = () => {
  //   setIsReplying(true);
  // };

  // const onCancelReply = () => {
  //   setIsReplying(false);
  // };

  return (
    <>
      <article
        // id={`${!!isAReply ? "reply" : "post"}-${id}`}
        // className={`${styles["post-container"]}
        //  ${
        //   darkTheme && styles["dark-mode"]
        // } ${isHomeOrProfilePage && styles["link"]} ${
        //   !!isAReply && styles["reply"]
        // }
        // `}
        className={`${styles["post-container"]} ${
          !!isAReply && styles["reply"]
        }`}
        role="button"
        // onClick={onClickPost}
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
          // isHomeOrProfilePage={isHomeOrProfilePage}
          darkTheme={darkTheme}
        />

        {insertedImage && (
          <PostInsertedImage
            insertedImage={insertedImage}
            // isHomeOrProfilePage={isHomeOrProfilePage}
          />
        )}

        <PostFooter
          id={id}
          likes={likes}
          replies={replies}
          isAReply={isAReply}
          // onClickReply={onClickReply}
          // isHomeOrProfilePage={isHomeOrProfilePage}
          darkTheme={darkTheme}
        />
      </article>

      {isReplying && (
        <ReplyBox
          replyingToPost={!!isAReply ? isAReply.replyingToPost : id}
          replyingToUser={author.id}
          darkTheme={darkTheme}
          // onCancelReply={onCancelReply}
        />
      )}
    </>
  );
};

export default Post;
