import { createRef, useState } from "react";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Form from "@components/Form";
import api from "@utils/api";
import { forgotPasswordSchema } from "@validation/authSchemas";
import validateSchema from "@validation/validateSchema";
import { Box } from "@mui/material";
import Image from "next/image";
import iconTitle from "@icons/icon-title.png";

const ForgotPassword = () => {
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = createRef<HTMLFormElement>();

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage({ error: false, msg: "" });
    setFieldErrors({});

    if (!form.current) return;
    const email = String(new FormData(form.current).get("email") || "")
      .trim()
      .toLowerCase();
    const validation = validateSchema(forgotPasswordSchema, { email });

    if (validation.error) {
      setMessage({ error: true, msg: validation.message });
      setFieldErrors(validation.fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const response = await api({
      method: "POST",
      type: "application/json",
      body: { email },
      route: "auth/forgot-password",
    });
    setIsSubmitting(false);

    setMessage({
      error: Boolean(response.error),
      msg:
        response.message ||
        "If an account exists for this email, a password reset email has been sent.",
    });
  };

  return (
    <>
      <Box sx={{ width: 64 }}>
        <Image src={iconTitle} alt="Ara" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Forgot password?
        </Typography>
        <Typography align="center" sx={{ maxWidth: 380 }}>
          Enter your email and we&apos;ll send you a link to reset your password.
        </Typography>
      </Box>

      <Form
        type="sign"
        form={form}
        inputs={[
          { title: "Email", props: { name: "email", type: "email", required: true } },
        ]}
        submitMsg={message}
        fieldErrors={fieldErrors}
        onSubmit={onSubmit}
        loading={isSubmitting}
      >
        <Link
          component={NextLink}
          href="/login"
          underline="hover"
          sx={{ fontWeight: 600 }}
        >
          Back to login
        </Link>
      </Form>
    </>
  );
};

export default ForgotPassword;
