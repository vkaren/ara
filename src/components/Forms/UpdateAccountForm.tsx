import React from "react";
import { useTranslation } from "react-i18next";
import { Stack, Container, Typography, Button } from "@mui/material";
import { TextFieldOutsideLabel } from "@components/Inputs";
import { AvatarUpload } from "@components/Avatar";

const UpdateAccountForm = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={"24px"} width={"100%"} height={"100%"} p={"16px"}>
      <Container
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        {/* TODO Back button */}
        <Typography variant="h3" fontSize={"16px"} fontWeight={500}>
          {t("views.settings.edit")}
        </Typography>
      </Container>

      <Container
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <AvatarUpload initialImage="" onImageUpload={() => {}} />
        <TextFieldOutsideLabel id="nickname" label={t("views.settings.editNickname")} />
        <TextFieldOutsideLabel id="username" label={t("views.settings.editUsername")} />
        <TextFieldOutsideLabel id="password" label={t("views.settings.editPassword")} />

        <Button
          size="medium"
          type="submit"
          sx={{
            alignSelf: "flex-end",
            px: "12px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {t("views.settings.saveChanges")}
        </Button>
      </Container>
    </Stack>
  );
};

export default UpdateAccountForm;
