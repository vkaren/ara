import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import Post from "@components/Post";
import styles from "./styles.module.css";

const Replies = ({ replies = [], onDeleteReply }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section
      className={`${styles["replies-container"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      {replies.map((reply) => (
        <Post
          key={`reply-${reply.id}`}
          id={reply.id}
          author={reply.author}
          content={reply.content}
          createdAt={reply.createdAt}
          insertedImage={reply.inserted_image}
          likes={reply.likes}
          isAReply={{
            replyingToPost: reply.replying_to_post,
            replyingToUser: reply.replying_to_user.username,
            onDeleteReply,
          }}
        />
      ))}
    </section>
  );
};

export default Replies;
