import { Stack, SxProps, Theme } from "@mui/material";
import { Post } from "@components/Cards";

interface PostListProps {
  posts: any[];
  spacing?: number;
  sx?: SxProps<Theme>;
}

const PostList = ({ posts, spacing = 2, sx }: PostListProps) => {
  return (
    <Stack spacing={spacing} sx={sx}>
      <Post
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        href={`/post/1`}
      />
      <Post
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        href={`/post/1`}
      />
      <Post
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        href={`/post/1`}
      />
    </Stack>
  );
};

export default PostList;
