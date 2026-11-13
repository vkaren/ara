import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type IconName =
  | "home"
  | "search"
  | "notifications"
  | "profile"
  | "settings"
  | "comment"
  | "reply"
  | "like"
  | "insertedImage"
  | "cancel"
  | "features"
  | "delete"
  | "arrow"
  | "upload"
  | "logout"
  | "notFound";

type IconProps = SvgIconProps & {
  name: IconName;
  active?: boolean;
};

const iconTypes: Record<IconName, ComponentType<SvgIconProps>> = {
  home: HomeOutlinedIcon,
  search: SearchIcon,
  notifications: NotificationsNoneOutlinedIcon,
  profile: PersonOutlineIcon,
  settings: SettingsOutlinedIcon,
  comment: ChatBubbleOutlineIcon,
  reply: ReplyOutlinedIcon,
  like: FavoriteBorderIcon,
  insertedImage: ImageOutlinedIcon,
  cancel: CancelOutlinedIcon,
  features: MoreHorizIcon,
  delete: DeleteOutlineIcon,
  arrow: ArrowForwardIcon,
  upload: CloudUploadOutlinedIcon,
  logout: LogoutIcon,
  notFound: ErrorOutlineIcon,
};

const IconComponent = ({ name, active = false, ...props }: IconProps) => {
  const Icon = name === "like" && active ? FavoriteIcon : iconTypes[name];

  return <Icon {...props} />;
};

export default IconComponent;
