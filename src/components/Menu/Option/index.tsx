import { useContext } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
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
        flex: { xs: 1, sm: "initial" },
        justifyContent: "center",
        borderRadius: 2,
        mb: 1,
        color: "text.primary",
        "& .MuiListItemText-root": { display: { xs: "none", sm: "block" } },
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        <IconComponent name={type} sx={{ fontSize: 26 }} />
      </ListItemIcon>
      <ListItemText primary={label} />
      {type === "notifications" && haveNotifications && (
        <Box
          aria-label="New notifications"
          sx={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            bgcolor: "error.main",
          }}
        />
      )}
    </ListItemButton>
  );
};

export default Option;
