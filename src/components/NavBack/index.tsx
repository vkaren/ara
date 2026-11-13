import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import IconComponent from "@components/Icon";

const NavBack = ({ prevRoute }) => {
  const router = useRouter();

  const onClickBack = () => {
    if (prevRoute) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  return (
    <AppBar
      component="nav"
      position="fixed"
      color="default"
      elevation={0}
      sx={{ width: { xs: "100%", sm: "calc(100% - 14.45rem)" }, right: 0 }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 48 }}>
        <IconButton onClick={onClickBack} aria-label="Go back">
          <IconComponent
            name="arrow"
            style={{ width: 24, height: 24, transform: "rotate(180deg)" }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBack;
