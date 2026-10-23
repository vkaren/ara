import { useContext } from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import getDateFormat from "@utils/getDateFormat";
import { UserContext } from "@context/userContext";
import ProfilePhoto from "@components/ProfilePhoto";
import HeaderFeatures from "../HeaderFeatures";

const PostHeader = ({ id, author, createdAt, isAReply }) => {
  const { userId } = useContext(UserContext);
  const dateFormat = getDateFormat(createdAt);

  const onClickLink = (e) => {
    e.stopPropagation();
  };

  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ minWidth: 0 }}
    >
      <ProfilePhoto photoUrl={author.profile_photo} />

      <Typography variant="body2" fontWeight={700} noWrap>
        {author.nickname}
      </Typography>

      <Link
        onClick={onClickLink}
        href={`/profile/${author.id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Typography variant="body2" color="text.secondary" noWrap>
          @{author.username}
        </Typography>
      </Link>

      <Typography variant="caption" color="text.secondary" noWrap>
        {dateFormat}
      </Typography>

      {author.id === userId && (
        <HeaderFeatures id={id} authorId={author.id} isAReply={isAReply} />
      )}
    </Stack>
  );
};

export default PostHeader;
