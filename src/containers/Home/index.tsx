import { Stack } from "@mui/material";
import { AddComment } from "@components/Inputs";
import { Post } from "@components/Cards";

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
