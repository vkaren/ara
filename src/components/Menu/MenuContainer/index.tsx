import LogoImage from "../LogoImage";
import LogoutButton from "../LogoutButton";
import Option from "../Option";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const MenuContainer = ({ options, isOnMobile }) => {
  return (
    <Box
      component="aside"
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        alignItems: "center",
        gap: { xs: 0, sm: 5 },
        position: "fixed",
        left: 0,
        bottom: { xs: 0, sm: "auto" },
        width: { xs: "100%", sm: 230 },
        height: { xs: 64, sm: "100vh" },
        px: { xs: 1, sm: 3 },
        py: { xs: 1, sm: 5 },
        borderTop: { xs: 1, sm: 0 },
        borderRight: { xs: 0, sm: 1 },
        borderColor: "divider",
        bgcolor: "background.paper",
        zIndex: 10,
      }}
    >
      {!isOnMobile && <LogoImage />}

      <List
        disablePadding
        sx={{
          alignSelf: { xs: "center", sm: "flex-start" },
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: { xs: "space-around", sm: "flex-start" },
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {options.map((opt) => (
          <Option key={opt} type={opt} />
        ))}
      </List>

      {!isOnMobile && <LogoutButton />}
    </Box>
  );
};

export default MenuContainer;
