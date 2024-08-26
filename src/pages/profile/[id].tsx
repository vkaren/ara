import AppLayout from "@containers/AppLayout";
import Profile from "@containers/Profile";
import NavBack from "@components/NavBack";
// import api from "@utils/api";
// import getPreviousRoute from "@utils/getPreviousRoute";

// export async function getServerSideProps({ req, res, query }) {
//   const props = {
//     profile: {},
//     previousRoute: getPreviousRoute(req),
//   };

//   const profile = await api({
//     method: "GET",
//     route: `user/${query.id}`,
//     ssr: {
//       req,
//       res,
//     },
//   });

//   if (!profile.error && profile.message !== "Internal server error") {
//     props.profile = profile;
//   } else {
//     return {
//       notFound: true,
//     };
//   }

//   return { props };
// }

const ProfilePage = ({ profile, previousRoute }) => {
  return (
    <AppLayout>
      <NavBack prevRoute={previousRoute} />

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
