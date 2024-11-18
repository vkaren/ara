import { Link, Stack, Theme, Typography } from "@mui/material";
import { Avatar } from "@components/Avatar";
import Management from "./PostManagement";

interface PostHeaderProps {
  nickname: string;
  username: string;
  createdAt: string;
  avatarUrl?: string;
  theme: Theme;
}

const Header = ({ nickname, username, avatarUrl, createdAt, theme }: PostHeaderProps) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
      <Avatar url={avatarUrl} width={24} height={24} />
      <Typography variant="subtitle2" fontWeight={500}>
        {nickname}
      </Typography>
      <Link
        href="#" // TODO
        variant="subtitle2"
        sx={{ color: theme.palette.grey[600], textDecoration: "none" }}
      >
        {username}
      </Link>
      <Typography variant="body2">{createdAt}</Typography>

      <Management
        onClickDelete={() => {
          return;
        }}
        theme={theme}
      />
    </Stack>
  );
};

export default Header;
