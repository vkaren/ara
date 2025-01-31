import { Card, CardActionArea, useTheme } from "@mui/material";
import Header from "./PostHeader";
import Content from "./PostContent";
import Footer from "./PostFooter";

interface PostProps {
  author: any;
  content: string;
  createdAt: any;
  insertedImage: string;
  likes: any;
  href?: string;
}

const Post = ({ href = "" }: PostProps) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: "24px", borderRadius: "5px" }}>
      <CardActionArea href={href}>
        <Header
          nickname="Nickname"
          username="@username"
          avatarUrl=""
          createdAt="1m"
          theme={theme}
        />
        <Content comment="" image="" />
        <Footer />
      </CardActionArea>
    </Card>
  );
};

export default Post;
