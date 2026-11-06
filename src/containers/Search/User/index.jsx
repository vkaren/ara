import Link from "next/link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfilePhoto from "@components/ProfilePhoto";
import FollowButton from "@components/FollowButton";

const User = ({ id, nickname, username, profilePhoto, type }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: type === "people-tf" ? 240 : "100%",
        p: 2,
        borderColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <ProfilePhoto photoUrl={profilePhoto} />
        <Stack component={Link} href={`/profile/${id}`} sx={{ minWidth: 0, flex: 1, color: "inherit", textDecoration: "none" }}>
          <Typography fontWeight={600} noWrap>{nickname}</Typography>
          <Typography variant="body2" color="text.secondary" noWrap>@{username}</Typography>
        </Stack>
        <FollowButton userIdToFollow={id} type={type} />
      </Stack>
    </Card>
  );
};

export default User;
