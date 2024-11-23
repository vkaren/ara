import { Avatar, SxProps, Theme } from "@mui/material";

interface IProfilePhoto {
  url?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

const UserAvatar = ({ url, width = 32, height = 32, sx }: IProfilePhoto) => {
  return (
    <Avatar
      src={url}
      sx={{
        width,
        height,
        bgcolor: "secondary.main",
        ...sx,
      }}
    />
  );
};

export default UserAvatar;
