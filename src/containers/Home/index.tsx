import AddComment from "@components/AddComment";
import Post from "@components/Post";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <AddComment />
      <Stack my={"24px"} spacing={2}>
        <Post />
        <Post />
        <Post />
      </Stack>
    </>
  );
};

export default Home;
