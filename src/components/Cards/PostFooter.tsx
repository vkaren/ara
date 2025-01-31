import { CardActions, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { MouseEvent } from "react";

interface FooterProps {
  likes?: number;
  comments?: number;
  hasLiked?: boolean;
  onComment?: () => void;
  onLike?: () => void;
}

const Footer = ({ likes, comments, hasLiked, onComment, onLike }: FooterProps) => {
  const handleClickLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onLike) {
      onLike();
    }
  };

  const handleClickComment = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onComment) {
      onComment();
    }
  };

  return (
    <CardActions disableSpacing sx={{ p: 0, justifyContent: "flex-end" }}>
      <IconButton
        size="small"
        sx={{
          gap: "2px",
        }}
        color="primary"
        onClick={handleClickComment}
      >
        <Icon icon={"mdi:comment-outline"} />
        <Typography variant="caption" color="primary" fontWeight={500}>
          {comments}
        </Typography>
      </IconButton>

      <IconButton
        size="small"
        sx={{
          gap: "2px",
        }}
        color="primary"
        onClick={handleClickLike}
      >
        <Icon icon={hasLiked ? "mdi:like" : "mdi:like-outline"} />
        <Typography variant="caption" color="primary" fontWeight={500}>
          {likes}
        </Typography>
      </IconButton>
    </CardActions>
  );
};

export default Footer;
