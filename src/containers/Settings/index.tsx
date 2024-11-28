import { DeleteDialog } from "@components/Dialogs";
import { SettingsList } from "@components/Lists";
import { Card, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h2" fontSize={20} fontWeight={500}>
        {t("views.settings.title")}
      </Typography>
      <Card
        sx={{
          minWidth: "100%",
          p: "12px",
        }}
      >
        <SettingsList onEditClick={() => {}} onDarkModeClick={() => {}} onDeleteClick={() => {}} />
        <DeleteDialog
          isOpen={false}
          subtitle={t("views.settings.confirmDeleteAccount")}
          onClose={() => {}}
          onDelete={() => {}}
        />
      </Card>
    </Stack>
  );
};

export default Settings;
