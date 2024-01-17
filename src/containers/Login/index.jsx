import { createRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import api from "@utils/api";
import { setItem } from "@utils/localstorage";
import iconTitle from "@icons/icon-title.png";
import styles from "@containers/SignLayout/styles.module.css";

const Login = () => {
  const [loginMsg, setLoginMsg] = useState({ error: false, msg: "" });
  const form = createRef();
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

      <form ref={form} className={styles["sign-form"]}>
        <label htmlFor="username" className={styles["sign-form__field"]}>
          <span className={styles["field__title"]}>Username</span>
          <input
            className={`${styles["field__input"]} ${
              loginMsg.error && styles["error"]
            }`}
            id="username"
            name="username"
            type="text"
            required
          />
        </label>

        <label htmlFor="password" className={styles["sign-form__field"]}>
          <span className={styles["field__title"]}>Password</span>
          <input
            className={`${styles["field__input"]} ${
              loginMsg.error && styles["error"]
            }`}
            id="password"
            name="password"
            type="password"
            minLength="5"
            required
          />
        </label>

        <button onClick={onSubmit} className={styles["sign-form__submit"]}>
          Continue
        </button>

        <span className={`${styles["sign-form__msg"]} ${styles["error"]}`}>
          {loginMsg.msg}
        </span>
      </form>
    </>
  );
};

export default Login;
