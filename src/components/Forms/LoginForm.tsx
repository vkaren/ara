import { Container, Stack, Typography } from "@mui/material";
import BaseAuthForm from "./BaseAuthForm";
import Image from "next/image";
import { loginSchema } from "config/validators";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    router.push("/home");
  };

  return (
    <Stack
      spacing={"15px"}
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
        <Typography variant="h2" mb={"30px"}>
          {t("views.login.title")}
        </Typography>
      </Container>
      <BaseAuthForm
        fields={[
          { name: "username", label: t("common.username"), minLength: 3, maxLength: 30 },
          {
            name: "password",
            label: t("common.password"),
            type: "password",
            minLength: 6,
            maxLength: 30,
          },
        ]}
        schema={loginSchema}
        onSubmit={onSubmit}
      />
    </Stack>
  );
};

export default LoginForm;
