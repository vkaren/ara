import iconSet from "../../json/mdi.json";
import { Icon, addCollection } from "@iconify/react";

// Add the icon set to Iconify
addCollection(iconSet);

const IconComponent = ({ name, ...props }) => {
  return <Icon icon={"mdi:icon-delete"} color="red" width={20} height={20} />;
};

export default IconComponent;
