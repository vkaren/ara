import { DesktopNavbar, MobileNavbar } from "@containers/Navbars";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { navbarOptions } from "config/nav";
import Head from "next/head";

const drawerWidth = 220;

const AppLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>

      <Box sx={{ display: "flex" }}>
        {isMobile ? (
          <MobileNavbar theme={theme} navbarOptions={navbarOptions} />
        ) : (
          <DesktopNavbar theme={theme} navbarOptions={navbarOptions} drawerWidth={drawerWidth} />
        )}

        <Box
          component="main"
          sx={{
            minWidth: `calc(${isMobile ? "100%" : "70%"} - ${isMobile ? 0 : drawerWidth}px)`,
            maxWidth: `calc(${isMobile ? "100%" : "70%"} - ${isMobile ? 0 : drawerWidth}px)`,
            flexGrow: 1,
            bgcolor: "background.default",
            px: 3,
            py: 6,
            mt: isMobile ? "60px" : 0,
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
