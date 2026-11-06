import { createRef, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserContext } from "@context/userContext";
import Form from "@components/Form";
import formInputs from "@data/forms.json";
import api from "@utils/api";
import iconTitle from "@icons/icon-title.png";
import { loginSchema } from "@validation/authSchemas";
import validateSchema from "@validation/validateSchema";

const Login = () => {
  const router = useRouter();
  const { saveLoginResponse } = useContext(UserContext);
  const [loginMsg, setLoginMsg] = useState({ error: false, msg: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoginMsg({ error: false, msg: "" });
    setFieldErrors({});

    const formData = new FormData(form.current);

    const username = formData.get("username").toLowerCase();
    const password = formData.get("password");

    const {
      error,
      message,
      fieldErrors: validationErrors,
    } = validateSchema(loginSchema, {
      username,
      password,
    });

    if (error) {
      setLoginMsg({ error: true, msg: message });
      setFieldErrors(validationErrors);
    }

    if (!error) {
      await login({
        username,
        password,
      });
    }
  };

  const login = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await api({
        method: "POST",
        type: "application/json",
        body: data,
        route: "auth/login",
      });

      if (response.error || response.message === "Internal server error") {
        setLoginMsg({ error: true, msg: response.message || "Unable to log in." });
      } else {
        setLoginMsg({ error: false, msg: "" });

        saveLoginResponse(response);

        router.push("/home");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box sx={{ width: 96 }}>
        <Image src={iconTitle} alt="Ara" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h4" component="h1" fontWeight={600}>
        Welcome back!
      </Typography>

      <Form
        type="sign"
        form={form}
        inputs={formInputs.forms.login}
        submitMsg={loginMsg}
        fieldErrors={fieldErrors}
        onSubmit={onSubmit}
        loading={isSubmitting}
      />
    </>
  );
};

export default Login;
