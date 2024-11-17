import AddComment from "@components/AddComment";
import Post from "@components/Post";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <AddComment />
      <Stack my={"24px"} spacing={2}>
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
    </>
  );
};

export default Home;
