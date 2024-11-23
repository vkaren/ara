import { AddComment } from "@components/Inputs";
import { PostList } from "@components/Lists";

const Home = () => {
  return (
    <>
      <AddComment />
      <PostList posts={[]} sx={{ my: "24px" }} />
    </>
  );
};

export default Home;
