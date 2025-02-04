import { Divider, Stack } from "@mui/material";
import { Post } from "@components/Cards";
import { PostList } from "@components/Lists";
import { BackButton } from "@components/Buttons";
import { useCallback } from "react";
import { useRouter } from "next/router";

interface ExpandedPostProps {
  post: any;
  replies: any[];
}

const ExpandedPost = ({ post, replies }: ExpandedPostProps) => {
  const router = useRouter();
  const handleBackBtnClick = useCallback(() => {
    // TODO: FIX
    router.back();
  }, [router]);

  return (
    <Stack spacing={2}>
      <BackButton onBack={handleBackBtnClick} />
      <Post
        author={"post.author"}
        content={"post.content"}
        createdAt={"post.createdAt"}
        insertedImage={"post.inserted_image"}
        likes={"post.likes"}
      />

      {/* TODO: Replies */}
      <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
        <Divider orientation="vertical" flexItem={true} />
        <PostList posts={[]} sx={{ width: "90%" }} />
      </Stack>
    </Stack>
  );
};

export default ExpandedPost;
