import { useState } from "react";
// import { useRouter } from "next/router";
import ContentIntro from "../ContentIntro";
import FullContent from "../FullContent";
import styles from "./styles.module.css";

const PostContent = ({
  id,
  content,
  replyingToUser,
  darkTheme,
  isHomeOrProfilePage,
}) => {
  // const router = useRouter();
  const contentLetters = content.split("");
  const [showMore, setShowMore] = useState(!isHomeOrProfilePage);

  // const onClickShowMore = (e) => {
  //   e.stopPropagation();

  //   if (isHomeOrProfilePage) {
  //     router.push(`/post/${id}`);
  //   } else {
  //     setShowMore(!showMore);
  //   }
  // };

  return (
    <div
      className={`${styles["post__content"]}  ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      {replyingToUser && (
        <span
          className={styles["content_replying-to"]}
        >{`@${replyingToUser} `}</span>
      )}

      {<ContentIntro content={content} />}

      {content.length > 50 && (
        <FullContent contentLetters={contentLetters} showMore={showMore} />
      )}
    </div>
  );
};

export default PostContent;
