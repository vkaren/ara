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
        id={0}
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        replies={undefined}
      />
      <Post
        id={0}
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        replies={undefined}
      />
      <Post
        id={0}
        author={undefined}
        content={""}
        createdAt={undefined}
        insertedImage={""}
        likes={undefined}
        replies={undefined}
      />
    </Stack>
  );
};

export default PostList;
