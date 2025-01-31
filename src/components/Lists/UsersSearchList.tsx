import { Avatar } from "@components/Avatar";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const UserSearchList = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          href="/profile/@username"
          sx={{
            borderRadius: "8px",
            py: "4px",
            px: "12px",
          }}
        >
          <ListItemIcon sx={{ minWidth: "auto", mr: "12px" }}>
            <Avatar url="" />
          </ListItemIcon>
          <ListItemText primary="@user" secondary="user 1 - 1 follower" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserSearchList;
