import { Divider, Stack } from "@mui/material";
import { Post } from "@components/Cards";
import { PostList } from "@components/Lists";

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

      {/* TODO: Replies */}
      <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
        <Divider orientation="vertical" flexItem={true} />
        <PostList posts={[]} sx={{ width: "90%" }} />
      </Stack>
    </>
  );
};

export default ExpandedPost;
