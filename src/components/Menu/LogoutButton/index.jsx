import { useContext } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "@context/userContext";

const LogoutButton = () => {
  const router = useRouter();
  const { removeUserInfo } = useContext(UserContext);

  const onLogOut = async () => {
    removeUserInfo();
    router.push("/login");
  };

  return (
    <Button
      onClick={onLogOut}
      endIcon={<LogoutIcon />}
      sx={{ alignSelf: { xs: "center", sm: "flex-end" }, mt: "auto" }}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
