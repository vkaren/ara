import { createRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@utils/api";
import iconTitle from "@icons/icon-title.png";
import styles from "@containers/SignLayout/styles.module.css";

const SignUp = () => {
  const [signUpMsg, setSignUpMsg] = useState({ error: false, msg: "" });

  const form = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    setSignUpMsg({ error: false, msg: "" });

    const formData = new FormData(form.current);

    const nickname = formData.get("nickname");
    const username = formData.get("username").toLowerCase();
    const password = formData.get("password");

    formData.set("username", username);

    const canCreateAccount = validateForm({
      nickname,
      username,
      password,
    });

    if (canCreateAccount) {
      await createAccount(formData);
    }
  };

  const validateForm = ({ nickname, username, password }) => {
    const allowedCharacters = /^([a-z0-9_])+$/i;
    const isPasswordRightLength = password.length >= 5;
    const nicknameHaveSpaces = nickname.includes(" ");

    if (
      nickname &&
      !nicknameHaveSpaces &&
      allowedCharacters.test(username) &&
      allowedCharacters.test(password) &&
      isPasswordRightLength
    ) {
      setSignUpMsg({ error: false, msg: "" });
      return true;
    } else if (!nickname) {
      setSignUpMsg({ error: true, msg: "Nickname required." });
    } else if (!username) {
      setSignUpMsg({ error: true, msg: "Username required." });
    } else if (!password) {
      setSignUpMsg({ error: true, msg: "Password required." });
    } else if (!isPasswordRightLength) {
      setSignUpMsg({
        error: true,
        msg: "Password must be at least 5 characters long.",
      });
    } else if (nicknameHaveSpaces) {
      setSignUpMsg({ error: true, msg: "Nickname cannot contain spaces." });
    } else {
      setSignUpMsg({
        error: true,
        msg: "Username and password can only contain underscores and alphanumeric characters.",
      });
    }
    return false;
  };

  const createAccount = async (formData) => {
    try {
      const response = await api({
        method: "POST",
        type: "multipart/form-data",
        body: formData,
        route: "user",
      });

      if (response.error) {
        setSignUpMsg({ error: true, msg: response.message });
      } else {
        setSignUpMsg({
          error: false,
          msg: "Your account has been successfully created. Please log in with the username and password you provided.",
        });
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

      <h1 className={styles["page-title"]}>Sign up</h1>

      <form ref={form} className={styles["sign-form"]}>
        <label htmlFor="nickname" className={styles["sign-form__field"]}>
          <span className={styles["field__title"]}>Nickname</span>
          <input
            className={`${styles["field__input"]} ${
              signUpMsg.error && styles["error"]
            }`}
            id="nickname"
            name="nickname"
            type="text"
            required
          />
        </label>

        <label htmlFor="username" className={styles["sign-form__field"]}>
          <span className={styles["field__title"]}>Username</span>
          <input
            className={`${styles["field__input"]} ${
              signUpMsg.error && styles["error"]
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
              signUpMsg.error && styles["error"]
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

        <span
          className={`${styles["sign-form__msg"]} ${
            signUpMsg.error && styles["error"]
          }`}
        >
          {signUpMsg.msg}
        </span>

        <Link className={styles["sign-form__link"]} href={"/login"}>
          Do you already have an account?
        </Link>
      </form>
    </>
  );
};

export default SignUp;
