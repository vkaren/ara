import { createRef, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { UserContext } from "@context/userContext";
import Form from "@components/Form";
import formInputs from "@data/forms.json";
import api from "@utils/api";
import iconTitle from "@icons/icon-title.png";
import styles from "@containers/SignLayout/styles.module.css";

const Login = () => {
  const router = useRouter();
  const { saveLoginResponse } = useContext(UserContext);
  const [loginMsg, setLoginMsg] = useState({ error: false, msg: "" });
  const form = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoginMsg({ error: false, msg: "" });

    const formData = new FormData(form.current);

    const username = formData.get("username").toLowerCase();
    const password = formData.get("password");

    const canLogin = validateForm({ username, password });

    if (canLogin) {
      await login({
        username,
        password,
      });
    }
  };

  const validateForm = ({ username, password }) => {
    if (!username) {
      setLoginMsg({ error: true, msg: "Username required." });
      return false;
    } else if (!password) {
      setLoginMsg({ error: true, msg: "Password required." });
      return false;
    }
    return true;
  };

  const login = async (data) => {
    try {
      const response = await api({
        method: "POST",
        type: "application/json",
        body: data,
        route: "auth/login",
      });

      if (response.error || response.message === "Internal server error") {
        setLoginMsg({ error: true, msg: response.message });
      } else {
        setLoginMsg({ error: false, msg: "" });

        saveLoginResponse(response);

        router.push("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles["app-title"]}>
        <Image src={iconTitle} alt="Ara" />
      </div>

      <h1 className={styles["page-title"]}>Welcome back!</h1>

      <Form
        type="sign"
        form={form}
        inputs={formInputs.forms.login}
        submitMsg={loginMsg}
        onSubmit={onSubmit}
        styles={styles}
      />
    </>
  );
};

export default Login;
