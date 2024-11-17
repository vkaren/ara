import ExpandedPost from "@containers/Post";

export async function getStaticPaths() {
  // const posts = await fetchPosts();

  // const paths = posts.map(post => ({
  //   params: { id: 1 post.id.toString() }, // Assuming 'id' is the dynamic route
  // }));

  return {
    paths: ["post/1"],
    fallback: "blocking", // 'true', 'false', or 'blocking' depending on your needs
  };
}

const PostPage = () => {
  return (
    <>
      {/* TODO Looks awful */}
      {/* <Box position={"fixed"} top={50} left={0} zIndex={5} p={"5px"}>
        <BackButton
          onBack={() => {
            return;
          }}
        />
      </Box> */}
      <ExpandedPost post={""} replies={[]} />
    </>
  );
};

export default PostPage;
