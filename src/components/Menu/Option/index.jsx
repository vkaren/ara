import { useContext } from "react";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AppContext } from "@context/appContext";
import { UserContext } from "@context/userContext";
import IconComponent from "@components/Icon";

const Option = ({ type }) => {
  const { haveNotifications } = useContext(AppContext);
  const { userId } = useContext(UserContext);
  const label = `${type[0].toUpperCase()}${type.slice(1)}`;

  return (
    <ListItemButton
      component={Link}
      href={type === "profile" ? `/${type}/${userId}` : `/${type}`}
      sx={{
        position: "relative",
        borderRadius: 2,
        mb: 1,
        color: "text.primary",
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        <IconComponent name={type} style={{ width: 26, height: 26 }} />
      </ListItemIcon>
      <ListItemText
        primary={label}
        sx={{ display: { xs: "none", sm: "block" } }}
      />
      {type === "notifications" && haveNotifications && (
        <span
          aria-label="New notifications"
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            backgroundColor: "#e43d3d",
          }}
        />
      )}
    </ListItemButton>
  );
};

export default Option;
