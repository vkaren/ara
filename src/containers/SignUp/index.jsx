import { createRef, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { UserContext } from "@context/userContext";
import Form from "@components/Form";
import formInputs from "@data/forms.json";
import api from "@utils/api";
import iconTitle from "@icons/icon-title.png";
import { signUpSchema } from "@validation/authSchemas";
import validateSchema from "@validation/validateSchema";

const SignUp = () => {
  const router = useRouter();
  const { saveLoginResponse } = useContext(UserContext);
  const [signUpMsg, setSignUpMsg] = useState({ error: false, msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    setSignUpMsg({ error: false, msg: "" });

    const formData = new FormData(form.current);

    const nickname = formData.get("nickname");
    const username = formData.get("username").toLowerCase();
    const password = formData.get("password");

    formData.set("username", username);

    const { error, message } = validateSchema(signUpSchema, {
      nickname,
      username,
      password,
    });

    if (error) {
      setSignUpMsg({ error: true, msg: message });
    } else {
      await createAccount(formData, { username, password });
    }
  };

  const createAccount = async (formData, loginData) => {
    setIsSubmitting(true);
    try {
      const response = await api({
        method: "POST",
        type: "multipart/form-data",
        body: formData,
        route: "user",
      });

      if (response.error || response.message === "Internal server error") {
        setSignUpMsg({ error: true, msg: response.message || "Unable to create your account." });
      } else {
        setSignUpMsg({
          error: false,
          msg: "",
        });

        redirectToAppHome(loginData);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const redirectToAppHome = async (data) => {
    const response = await api({
      method: "POST",
      type: "application/json",
      body: data,
      route: "auth/login",
    });

    if (response.error || response.message === "Internal server error") {
      setSignUpMsg({ error: true, msg: response.message || "Unable to sign you in." });
    } else {
      setSignUpMsg({ error: false, msg: "" });

      saveLoginResponse(response);

      router.push("/home");
    }
  };

  return (
    <>
      <Box sx={{ width: 96 }}>
        <Image src={iconTitle} alt="Ara" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h4" component="h1" fontWeight={600}>
        Sign up
      </Typography>

      <Form
        type="sign"
        form={form}
        inputs={formInputs.forms["sign-up"]}
        submitMsg={signUpMsg}
        onSubmit={onSubmit}
        loading={isSubmitting}
      >
        <Link
          component={NextLink}
          href="/login"
          underline="hover"
          fontWeight={600}
        >
          Do you already have an account?
        </Link>
      </Form>
    </>
  );
};

export default SignUp;
