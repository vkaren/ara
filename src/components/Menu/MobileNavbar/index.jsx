import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import Box from "@mui/material/Box";

const MobileNavbar = () => {
  return (
    <Box
      component="nav"
      aria-label="Mobile header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        px: 3,
        py: 1,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        zIndex: 10,
      }}
    >
      <LogoImage />
      <LogoutButton />
    </Box>
  );
};

export default MobileNavbar;
