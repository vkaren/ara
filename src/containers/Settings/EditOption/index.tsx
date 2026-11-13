import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@components/Icon";

const EditOption = () => {
  return (
    <ListItemButton component={Link} href="/settings/edit" sx={{ borderRadius: 2 }}>
      <ListItemText primary="Edit profile" />
      <ListItemIcon sx={{ minWidth: 0 }}>
        <IconComponent name="arrow" style={{ width: 24, height: 24 }} />
      </ListItemIcon>
    </ListItemButton>
  );
};

export default EditOption;
