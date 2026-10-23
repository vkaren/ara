import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { UserContext } from "@context/userContext";
import ProfilePhoto from "@components/ProfilePhoto";
import FollowButton from "@components/FollowButton";

const UserInfo = ({
  id,
  nickname,
  username,
  profilePhoto,
  followers = [],
  bio,
}) => {
  const { userId } = useContext(UserContext);
  const [numberFollowers, setNumberFollowers] = useState(followers.length);

  const updateNumberFollowers = (type) => {
    if (type === "follow") {
      setNumberFollowers(numberFollowers + 1);
    } else {
      setNumberFollowers(numberFollowers - 1);
    }
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 13 }, py: 3, borderBottom: 1, borderColor: "primary.main" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
      >
        <ProfilePhoto photoUrl={profilePhoto} profilePage={true} />

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={600}>{nickname}</Typography>
          <Typography variant="body1" color="text.secondary">@{username}</Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2">
            {`${numberFollowers} follower${numberFollowers === 1 ? "" : "s"}`}
          </Typography>

          {userId !== id && (
            <FollowButton
              userIdToFollow={id}
              updateNumberFollowers={updateNumberFollowers}
            />
          )}
        </Stack>
      </Stack>

      {bio && <Typography sx={{ mt: 2 }}>{bio}</Typography>}
    </Box>
  );
};

export default UserInfo;
