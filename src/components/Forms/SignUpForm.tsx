import BaseAuthForm from "./BaseAuthForm";
import { signUpSchema } from "config/validators";
import { useTranslation } from "react-i18next";
import { Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("Sign Up Data:", data);
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
        <Typography variant="h2" mb={"20px"}>
          {t("views.register.title")}
        </Typography>
      </Container>
      <BaseAuthForm
        schema={signUpSchema}
        fields={[
          { name: "nickname", label: t("common.nickname"), minLength: 3, maxLength: 30 },
          { name: "username", label: t("common.username"), minLength: 3, maxLength: 30 },
          { name: "password", label: t("common.password"), type: "password", minLength: 6 },
        ]}
        onSubmit={onSubmit}
      />
      <Link href="/login" underline="none" textAlign={"center"} fontSize={"14px"} fontWeight={500}>
        {t("views.register.redirectLink")}
      </Link>
    </Stack>
  );
};

export default SignUpForm;
