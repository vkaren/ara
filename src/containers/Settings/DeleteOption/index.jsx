import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@components/Icon";

const DeleteOption = ({ onDelete }) => {
  return (
    <ListItemButton
      onClick={onDelete}
      sx={{ borderRadius: 2, color: "error.main" }}
    >
      <ListItemText primary="Delete account" />
      <ListItemIcon sx={{ minWidth: 0, color: "error.main" }}>
        <IconComponent name="delete" style={{ width: 24, height: 24 }} />
      </ListItemIcon>
    </ListItemButton>
  );
};

export default DeleteOption;
