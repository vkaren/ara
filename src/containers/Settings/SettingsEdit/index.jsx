import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import Form from "@components/Form";
import FileUploaded from "../FileUploaded";
import styles from "./styles.module.css";

const SettingsEdit = ({ userInfo }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { userId } = useContext(UserContext);
  const [fileUploaded, setFileUploaded] = useState("");
  const [editMsg, setEditMsg] = useState({ error: false, msg: "" });

  const formRef = useRef();
  const formInputs = [
    {
      title: "Nickname",
      props: {
        name: "nickname",
        type: "text",
        placeholder: userInfo?.nickname,
      },
    },
    {
      title: "Bio",
      props: {
        name: "bio",
        type: "text",
        placeholder: userInfo?.bio,
      },
    },
    {
      title: "Profile picture",
      props: {
        name: "profile_photo",
        type: "file",
        accept: ".png,.jpg",
        onChange: (e) => {
          setFileUploaded(e.currentTarget.files[0].name);
        },
      },
      anotherComponent: (file) => <FileUploaded file={file} />,
    },
    {
      title: "Username",
      props: {
        name: "username",
        type: "text",
        placeholder: userInfo?.username,
      },
    },
    {
      title: "Password",
      props: { name: "password", type: "password", minLength: "5" },
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    setEditMsg({ error: false, msg: "" });

    const formData = new FormData(formRef.current);

    const nickname = formData.get("nickname");
    const bio = formData.get("bio");
    const profilePicture = formData.get("profile_photo").name;
    const username = formData.get("username");
    const password = formData.get("password");

    const canUpdateProfile = validateForm({
      nickname,
      bio,
      profilePicture,
      username,
      password,
    });

    if (canUpdateProfile) {
      updateProfile(formData);
    }
  };

  const validateForm = ({
    nickname,
    bio,
    profilePicture,
    username,
    password,
  }) => {
    const allowedCharacters = /^([a-z0-9_])+$/i;
    const isPasswordRightLength = password.length >= 5;
    const nicknameHaveSpaces = nickname.includes(" ");

    if (nickname && nicknameHaveSpaces) {
      setEditMsg({ error: true, msg: "Nickname cannot contain spaces." });
    } else if (password && !isPasswordRightLength) {
      setEditMsg({
        error: true,
        msg: "Password must be at least 5 characters long.",
      });
    } else if (
      (password && !allowedCharacters.test(password)) ||
      (username && !allowedCharacters.test(username))
    ) {
      setEditMsg({
        error: true,
        msg: "Username and password can only contain underscores and alphanumeric characters.",
      });
    } else if (nickname || bio || profilePicture || username || password) {
      return true;
    }

    return false;
  };

  const updateProfile = async (formData) => {
    try {
      const response = await api({
        method: "PATCH",
        route: `user/${userId}`,
        type: "multipart/form-data",
        body: formData,
      });

      if (response.error || response.message === "Internal server error") {
        setEditMsg({ error: true, msg: "Internal server error" });
      } else {
        setEditMsg({
          error: false,
          msg: "We’ve saved your profile changes.",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      className={`${styles["edit-section"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      <h2 className={styles["edit-section__title"]}>Settings</h2>

      <h3 className={styles["edit-section__title-2"]}>Edit Profile</h3>

      <Form
        type="edit"
        form={formRef}
        inputs={formInputs}
        fileUploaded={fileUploaded}
        submitMsg={editMsg}
        onSubmit={onSubmit}
        styles={styles}
      />
    </section>
  );
};

export default SettingsEdit;
