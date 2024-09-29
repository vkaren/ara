import Post from "@components/Post";
import { Divider, Stack } from "@mui/material";

interface ExpandedPostProps {
  post: any;
  replies: any[];
}

const ExpandedPost = ({ post, replies }: ExpandedPostProps) => {
  return (
    <>
      <Post
        id={1}
        author={"post.author"}
        content={"post.content"}
        createdAt={"post.createdAt"}
        insertedImage={"post.inserted_image"}
        likes={"post.likes"}
        replies={"replies"}
      />

      <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
        <Divider orientation="vertical" flexItem={true} />
        <Stack width={"90%"} spacing={2}>
          <Post
            id={1}
            author={"post.author"}
            content={"post.content"}
            createdAt={"post.createdAt"}
            insertedImage={"post.inserted_image"}
            likes={"post.likes"}
            replies={"replies"}
          />
          <Post
            id={1}
            author={"post.author"}
            content={"post.content"}
            createdAt={"post.createdAt"}
            insertedImage={"post.inserted_image"}
            likes={"post.likes"}
            replies={"replies"}
          />
          <Post
            id={1}
            author={"post.author"}
            content={"post.content"}
            createdAt={"post.createdAt"}
            insertedImage={"post.inserted_image"}
            likes={"post.likes"}
            replies={"replies"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ExpandedPost;
