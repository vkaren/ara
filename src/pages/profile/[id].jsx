import AppLayout from "@containers/AppLayout";
import Profile from "@containers/Profile";
import NavBack from "@components/NavBack";

const postTest = {
  id: 1,
  author: { nickname: "karen", username: "karen" },
  createdAt: "1 min",
  content: "Hola",
};

const profileTest = {
  id: 1,
  nickname: "karen",
  username: "karen",
  posts: [postTest],
};

const ProfilePage = ({ userFollowing, profile = profileTest }) => {
  return (
    <AppLayout>
      <NavBack />

      {profile && (
        <Profile
          id={profile.id}
          nickname={profile.nickname}
          username={profile.username}
          profilePhoto={profile.profile_photo}
          followers={profile.followers}
          bio={profile.bio}
          posts={profile.posts}
        />
      )}
    </AppLayout>
  );
};

export default ProfilePage;
