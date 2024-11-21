import { Avatar } from "@components/Avatar";
import { Icon } from "@iconify/react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { notificationsTypes, TNotifOption } from "config/notifications";
import { useTranslation } from "react-i18next";

interface NotifsListProps {
  notifications: { type: TNotifOption }[];
}

const NotifsList = ({ notifications }: NotifsListProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <List>
      {notifications.map(n => (
        <ListItem
          key={n.type}
          disablePadding
          sx={{
            borderBottom: 1,
            borderColor: "primary.100",
          }}
        >
          <ListItemButton
            sx={{
              py: "4px",
              px: "12px",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: "auto",
                mr: "8px",
              }}
            >
              <Icon
                icon={notificationsTypes[n.type].icon}
                width={20}
                height={20}
                color={theme.palette.primary.main}
              />
              <Avatar url="" />
            </ListItemIcon>
            <ListItemText
              primary="Karen"
              secondary={t(`${notificationsTypes[n.type].message}`, { user: "@karen" })}
              sx={{
                ".MuiTypography-root": { fontSize: "14px" },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NotifsList;
