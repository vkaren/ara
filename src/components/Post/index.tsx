import { Card, useTheme } from "@mui/material";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Post = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: "24px", borderRadius: "5px" }}>
      <Header nickname="Nickname" username="@username" avatarUrl="" createdAt="1m" theme={theme} />
      <Content comment="" image="" />
      <Footer />
    </Card>
  );
};

export default Post;
