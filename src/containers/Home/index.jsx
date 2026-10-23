import dynamic from "next/dynamic";
import Stack from "@mui/material/Stack";
import AddComment from "@components/AddComment";

const Post = dynamic(() => import("@components/Post"), { ssr: false });

const Home = ({ posts }) => {
  return (
    <>
      <AddComment />

      <Stack
        component="section"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        {posts.map((post) => (
          <Post
            key={`post-${post.id}`}
            id={post.id}
            author={post.author}
            createdAt={post.createdAt}
            content={post.content}
            insertedImage={post.inserted_image}
            likes={post.likes}
            replies={post.replies}
          />
        ))}
      </Stack>
    </>
  );
};

export default Home;
