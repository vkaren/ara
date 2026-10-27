import UserInfo from "./UserInfo";
import Post from "@components/Post";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Profile = ({
  id,
  nickname,
  username,
  profilePhoto,
  followers = [],
  bio,
  posts = [],
}) => {
  return (
    <>
      <Box component="header" sx={{ width: "100%", mt: -6 }}>
        <Box sx={{ width: "100%", height: "25vh", bgcolor: "primary.light" }} />

        <UserInfo
          id={id}
          nickname={nickname}
          username={username}
          profilePhoto={profilePhoto}
          bio={bio}
          followers={followers}
        />
      </Box>

      <Stack
        component="section"
        alignItems="center"
        spacing={2}
        sx={{ width: "90%" }}
      >
        {posts.length > 0 ? (
          posts.map((post) => (
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
          ))
        ) : (
          <Typography color="text.secondary" role="status">
            This user has not published anything yet.
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default Profile;
