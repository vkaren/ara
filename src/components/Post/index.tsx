import { Card, useTheme } from "@mui/material";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useCallback } from "react";
import { useRouter } from "next/router";

interface PostProps {
  id: number;
  author: any;
  content: string;
  createdAt: any;
  insertedImage: string;
  likes: any;
  replies: any;
}

const Post = ({ id }: PostProps) => {
  const router = useRouter();
  const theme = useTheme();
  const onClickPost = useCallback(() => {
    router.push(`post/${id}`);
  }, [id, router]);

  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", p: "24px", borderRadius: "5px" }}
      onClick={onClickPost}
    >
      <Header nickname="Nickname" username="@username" avatarUrl="" createdAt="1m" theme={theme} />
      <Content comment="" image="" />
      <Footer />
    </Card>
  );
};

export default Post;
