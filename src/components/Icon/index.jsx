import HomeIcon from "@icons/icon-home.svg";
import SearchIcon from "@icons/icon-search.svg";
import NotifIcon from "@icons/icon-heart.svg";
import ProfileIcon from "@icons/icon-profile.svg";
import ConfigIcon from "@icons/icon-config.svg";
import CommentIcon from "@icons/icon-comnt.svg";
import ReplyIcon from "@icons/icon-reply.svg";
import LikeIcon from "@icons/icon-like.svg";
import InsertedImageIcon from "@icons/icon-image.svg";
import CancelIcon from "@icons/icon-cancel.svg";
import FeaturesIcon from "@icons/icon-dots.svg";
import DeleteIcon from "@icons/icon-delete.svg";

const iconTypes = {
  home: HomeIcon,
  search: SearchIcon,
  notifications: NotifIcon,
  profile: ProfileIcon,
  settings: ConfigIcon,
  comment: CommentIcon,
  reply: ReplyIcon,
  like: LikeIcon,
  insertedImage: InsertedImageIcon,
  cancel: CancelIcon,
  features: FeaturesIcon,
  delete: DeleteIcon,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];

  return <Icon {...props} />;
};

export default IconComponent;
