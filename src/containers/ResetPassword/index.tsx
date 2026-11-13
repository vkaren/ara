import { createRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Form from "@components/Form";
import api from "@utils/api";
import { resetPasswordSchema } from "@validation/authSchemas";
import validateSchema from "@validation/validateSchema";

const ResetPassword = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = createRef<HTMLFormElement>();

  useEffect(() => {
    if (!router.isReady) return;
    const queryToken = router.query.token;
    const value = Array.isArray(queryToken) ? queryToken[0] : queryToken || "";
    setToken(value);
    if (value.length !== 64) {
      setMessage({
        error: true,
        msg: "This password reset link is invalid or expired.",
      });
    }
  }, [router.isReady, router.query.token]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage({ error: false, msg: "" });
    setFieldErrors({});

    if (!form.current) return;
    const password = String(new FormData(form.current).get("password") || "");
    const validation = validateSchema(resetPasswordSchema, { token, password });

    if (validation.error) {
      setMessage({ error: true, msg: validation.message });
      setFieldErrors(validation.fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const response = await api({
      method: "POST",
      type: "application/json",
      body: { token, password },
      route: "auth/reset-password",
    });
    setIsSubmitting(false);

    setMessage({
      error: Boolean(response.error),
      msg: response.message || "Unable to reset your password.",
    });
  };

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
        Reset password
      </Typography>
      <Form
        type="sign"
        form={form}
        inputs={[
          {
            title: "New password",
            props: { name: "password", type: "password", minLength: 8, required: true },
          },
        ]}
        submitMsg={message}
        fieldErrors={fieldErrors}
        onSubmit={onSubmit}
        loading={isSubmitting || !router.isReady}
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

export default ResetPassword;
