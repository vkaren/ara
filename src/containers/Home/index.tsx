import { AddCommentForm } from "@components/Forms";
import { PostList } from "@components/Lists";
import { useCallback } from "react";

const Home = () => {
  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <AddCommentForm onSubmit={onSubmit} />
      <PostList posts={[]} sx={{ my: "24px" }} />
    </>
  );
};

export default Home;
