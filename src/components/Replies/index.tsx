import Post from "@components/Post";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReplyProps } from "@app-types/ui";

const Replies = ({
  replies = [],
  onDeleteReply = undefined,
}: {
  replies?: ReplyProps[];
  onDeleteReply?: (replyId: number) => void;
}) => {
  return (
    <Stack
      component="section"
      spacing={2}
      sx={{
        width: { xs: "calc(100% - 2rem)", sm: "75%" },
        maxWidth: 600,
        minWidth: 0,
        borderLeft: { xs: 0, sm: 3 },
        borderColor: "divider",
        pl: 2,
        mt: 2,
        alignItems: "flex-end",
      }}
    >
      {replies.length > 0 ? (
        replies.map((reply) => (
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
        ))
      ) : (
        <Typography color="text.secondary" role="status">
          No replies yet.
        </Typography>
      )}
    </Stack>
  );
};

export default Replies;
