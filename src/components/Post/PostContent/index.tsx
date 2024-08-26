import { useState } from "react";
import { useRouter } from "next/router";
import ContentIntro from "../ContentIntro";
import FullContent from "../FullContent";
import styles from "./styles.module.css";

const PostContent = ({ id, content, replyingToUser, isHomeOrProfilePage }) => {
  const router = useRouter();
  const contentLetters = content.split("");
  const [showMore, setShowMore] = useState(!isHomeOrProfilePage);

  const onClickShowMore = e => {
    e.stopPropagation();

    // if (isHomeOrProfilePage) {
    //   router.push(`/post/${id}`);
    // } else {
    //   setShowMore(!showMore);
    // }
  };

  return (
    <div className={`${styles["post__content"]} `}>
      {replyingToUser && (
        <span
          className={`${styles["content_replying-to"]} clrLgtPurple`}
        >{`@${replyingToUser} `}</span>
      )}

      {<ContentIntro contentLetters={contentLetters} />}

      {contentLetters.length > 50 && (
        <FullContent
          onClickShowMore={onClickShowMore}
          contentLetters={contentLetters}
          showMore={showMore}
        />
      )}
    </div>
  );
};

export default PostContent;
