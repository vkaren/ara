import { createRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Form from "@components/Form";
import api from "@utils/api";
import { setItem } from "@utils/localstorage";
import iconTitle from "@icons/icon-title.png";
import styles from "@containers/SignLayout/styles.module.css";

const Login = () => {
  const [loginMsg, setLoginMsg] = useState({ error: false, msg: "" });
  const form = createRef();
  const formInputs = [
    {
      title: "Username",
      props: {
        name: "username",
        type: "text",
        required: true,
      },
    },
    {
      title: "Password",
      props: {
        name: "password",
        type: "password",
        minLength: "5",
        required: true,
      },
    },
  ];
  const router = useRouter();

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

      if (response.error) {
        setLoginMsg({ error: true, msg: response.message });
      } else {
        setLoginMsg({ error: false, msg: "" });

        setItem("token", response.token);
        setItem("user_id", response.user_id);

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
        inputs={formInputs}
        submitMsg={loginMsg}
        onSubmit={onSubmit}
        styles={styles}
      />
    </>
  );
};

export default Login;
