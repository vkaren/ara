import { Icon } from "@iconify/react";
import { Avatar, useTheme } from "@mui/material";

interface IProfilePhoto {
  url?: string;
  width?: number;
  height?: number;
}

const UserAvatar = ({ url, width, height }: IProfilePhoto) => {
  const theme = useTheme();
  return (
    <Avatar
      src={url}
      alt="profile Photo"
      sx={{ width: width || 32, height: height || 32, backgroundColor: "transparent" }}
    >
      {!url && (
        <Icon icon={"mdi:user-circle"} color={theme.palette.secondary.main} width={"100%"} />
      )}
    </Avatar>
  );
};

export default UserAvatar;
