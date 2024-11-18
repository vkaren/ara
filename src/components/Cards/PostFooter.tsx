import { CardActions, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface FooterProps {
  likes?: number;
  comments?: number;
  hasLiked?: boolean;
  onComment?: () => void;
  onLike?: () => void;
}

const Footer = ({ likes, comments, hasLiked, onComment, onLike }: FooterProps) => {
  return (
    <CardActions disableSpacing sx={{ p: 0, justifyContent: "flex-end" }}>
      <IconButton
        size="small"
        sx={{
          gap: "2px",
        }}
        color="primary"
        onClick={onComment}
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
        onClick={onLike}
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
