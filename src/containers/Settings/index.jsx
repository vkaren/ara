import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import EditOption from "./EditOption";
import DarkModeOption from "./DarkModeOption";
import DeleteOption from "./DeleteOption";
import DeleteModal from "@components/DeleteModal";

const Settings = () => {
  const router = useRouter();
  const { userId, removeUserInfo } = useContext(UserContext);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const toggleDeleteModal = () => setIsDeletingAccount(!isDeletingAccount);

  const onDeleteAccount = async () => {
    const { userDeleted } = await api({
      method: "DELETE",
      route: `user/${userId}`,
    });

    if (userDeleted) {
      removeUserInfo();
      router.push("/");
    }
  };

  return (
    <>
      <Paper
        component="section"
        variant="outlined"
        sx={{ width: "80%", maxWidth: 600, p: { xs: 2, sm: 4 }, borderColor: "primary.main" }}
      >
        <Typography variant="h5" component="h2" fontWeight={600}>
          Settings
        </Typography>

        <Stack component="ul" spacing={1} sx={{ p: 0, my: 4 }}>
          <EditOption />

          <DarkModeOption />

          <DeleteOption onDelete={toggleDeleteModal} />
        </Stack>
      </Paper>

      {isDeletingAccount && (
        <DeleteModal
          type="account"
          onDelete={onDeleteAccount}
          onCancelDelete={toggleDeleteModal}
        />
      )}
    </>
  );
};

export default Settings;
