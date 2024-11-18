import ExpandedPost from "@containers/ExpandedPost";

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
