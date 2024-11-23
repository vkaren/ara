import { Container, useMediaQuery, useTheme } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import { PostList } from "@components/Lists";

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <ProfileHeader />
      <PostList
        posts={[]}
        sx={{ mt: isMobile ? "210px" : "24px", mb: isMobile ? "60px" : "24px" }}
      />
    </Container>
  );
};

export default Profile;
