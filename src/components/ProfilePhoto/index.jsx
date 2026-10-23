import Avatar from "@mui/material/Avatar";
import IconComponent from "@components/Icon";

const ProfilePhoto = ({ photoUrl, profilePage }) => {
  return (
    <Avatar
      src={photoUrl || undefined}
      alt="User avatar"
      sx={{
        width: profilePage ? 100 : 40,
        height: profilePage ? 100 : 40,
        flexShrink: 0,
        border: 1,
        borderColor: "primary.main",
        bgcolor: "background.paper",
      }}
    >
      <IconComponent name="profile" style={{ fill: "currentColor" }} />
    </Avatar>
  );
};

export default ProfilePhoto;
