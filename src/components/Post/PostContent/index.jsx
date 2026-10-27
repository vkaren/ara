import { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContentIntro from "../ContentIntro";
import FullContent from "../FullContent";

const PostContent = ({ id, content, replyingToUser, isHomeOrProfilePage }) => {
  const router = useRouter();
  const contentLetters = content.split("");
  const [showMore, setShowMore] = useState(!isHomeOrProfilePage);

  const onClickShowMore = (e) => {
    e.stopPropagation();

    if (isHomeOrProfilePage) {
      router.push(`/post/${id}`);
    } else {
      setShowMore(!showMore);
    }
  };

  return (
    <Box sx={{ mx: 1, my: 1, fontSize: "1rem", wordBreak: "break-word" }}>
      {replyingToUser && (
        <Typography component="span" color="primary" fontWeight={600}>
          {`@${replyingToUser} `}
        </Typography>
      )}

      <ContentIntro contentLetters={contentLetters} />

      {contentLetters.length > 50 && (
        <FullContent
          onClickShowMore={onClickShowMore}
          contentLetters={contentLetters}
          showMore={showMore}
          isHomeOrProfilePage={isHomeOrProfilePage}
        />
      )}
    </Box>
  );
};

export default PostContent;
