import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Stack, Container, Typography, TextField, Box, Button, Link } from "@mui/material";

interface IAuthFormProps {
  titleKey: string;
  showRegisterLink?: boolean;
}

const AuthForm = ({ titleKey, showRegisterLink }: IAuthFormProps) => {
  const { t } = useTranslation();

  return (
    <Stack
      spacing={"50px"}
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"12px"}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Image src={"/assets/ara.png"} alt="Ara" width={60} height={30} />
        <Typography variant="h2">{t(titleKey)}</Typography>
      </Container>

      <Container
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          maxWidth: "450px !important",
        }}
      >
        <TextField
          id="username"
          label={t("common.username")}
          InputProps={{ sx: { borderRadius: "10px" } }}
        />
        <TextField
          id="password"
          label={t("common.password")}
          InputProps={{ sx: { borderRadius: "10px" } }}
        />

        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              borderRadius: "20px",
              fontSize: "15px",
              py: "8px",
            }}
          >
            {t("common.continue")}
          </Button>

          {showRegisterLink && (
            <Link
              href="/login"
              underline="none"
              textAlign={"center"}
              fontSize={"14px"}
              fontWeight={500}
            >
              {t("views.register.redirectLink")}
            </Link>
          )}
        </Box>
      </Container>
    </Stack>
  );
};

export default AuthForm;
