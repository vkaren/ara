import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { LogoutButton } from "@components/Buttons";
import { INavbarOption } from "config/navbar";
import { useAppTranslation } from "hooks";

interface MobileNavbarProps {
  theme: Theme;
  navbarOptions: INavbarOption[];
  drawerWidth: number;
}

const DesktopNavbar = ({ theme, navbarOptions, drawerWidth }: MobileNavbarProps) => {
  const { t } = useAppTranslation();

  return (
    <Drawer
      sx={{
        "&.MuiDrawer-root": {
          width: `${drawerWidth}px`,
        },
        "& .MuiDrawer-paper": {
          display: "flex",
          alignItems: "center",
          px: "14px",
          py: "20px",
          boxSizing: "border-box",
          width: `${drawerWidth}px`,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ m: "15px" }}>
        <Link href="/home">
          <Image src="/assets/macaw.png" alt="Ara" width={45} height={45} />
        </Link>
      </Box>

      <List sx={{ mt: "10px" }}>
        {navbarOptions.map(o => (
          <ListItem key={o.option} disablePadding>
            <ListItemButton
              href={`/${o.option}`}
              sx={{
                m: "5px",
                borderRadius: "10px",
                gap: "1rem",
                "&:hover .MuiListItemIcon-root": { transform: "scale(1.1)" },
                "&:active .MuiListItemIcon-root": { transform: "scale(1)" },
              }}
            >
              <ListItemIcon sx={{ minWidth: "fit-content" }}>
                <Icon icon={o.icon} width={30} height={30} color={theme.palette.secondary.main} />
              </ListItemIcon>
              <ListItemText
                sx={{ "& .MuiTypography-root": { fontWeight: 500 } }}
                primary={t(`navbar.${o.option}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <LogoutButton theme={theme} styles={{ alignSelf: "flex-end", mt: "auto" }} />
    </Drawer>
  );
};

export default DesktopNavbar;
