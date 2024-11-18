import { LogoutButton } from "@components/Buttons";
import { Icon } from "@iconify/react";
import { AppBar, Box, IconButton, Theme, Toolbar } from "@mui/material";
import { INavbarOption } from "config/navbar";
import Image from "next/image";
import Link from "next/link";

interface MobileNavbarProps {
  theme: Theme;
  navbarOptions: INavbarOption[];
}

const MobileNavbar = ({ theme, navbarOptions }: MobileNavbarProps) => (
  <>
    {/* navbar top */}
    <AppBar
      position="fixed"
      sx={{
        bgcolor: theme.palette.background.default,
        boxShadow: 0,
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box width="32px" height="32px" my="10px">
          <Link href="/home">
            <Image src="/assets/macaw.png" alt="Ara" width={32} height={32} />
          </Link>
        </Box>
        <LogoutButton theme={theme} />
      </Toolbar>
    </AppBar>

    {/* navbar bottom*/}
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: theme.palette.background.default,
        boxShadow: 0,
        borderTop: `1px solid ${theme.palette.grey[100]}`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {navbarOptions.map(o => (
          <IconButton key={o.option} href={`/${o.option}`}>
            <Icon icon={o.icon} width={30} height={30} color={theme.palette.secondary.main} />
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  </>
);

export default MobileNavbar;
