import HomeIcon from "@icons/icon-home.svg";
import SearchIcon from "@icons/icon-search.svg";
import NotifIcon from "@icons/icon-heart.svg";
import ProfileIcon from "@icons/icon-profile.svg";
import ConfigIcon from "@icons/icon-config.svg";

const iconTypes = {
  home: HomeIcon,
  search: SearchIcon,
  notifications: NotifIcon,
  profile: ProfileIcon,
  settings: ConfigIcon,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];

  return <Icon {...props} />;
};

export default IconComponent;
