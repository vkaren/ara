import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import Form from "@components/Form";
import FileUploaded from "../FileUploaded";
import styles from "./styles.module.css";

const SettingsEdit = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [editMsg, setEditMsg] = useState({ error: false, msg: "" });
  const formRef = useRef();
  const formInputs = [
    {
      title: "Nickname",
      props: {
        name: "nickname",
        type: "text",
        // placeholder : userData.nickname
      },
    },
    {
      title: "Bio",
      props: {
        name: "bio",
        type: "text",
        // placeholder : userData.bio
      },
    },
    {
      title: "Profile picture",
      props: {
        name: "profile_photo",
        type: "file",
        accept: ".png,.jpg",
        // onChange: onUpload
      },
      anotherComponent: (file) => <FileUploaded file={file} />,
    },
    {
      title: "Username",
      props: {
        name: "username",
        type: "text",
        // placeholder : userData.username
      },
    },
    {
      title: "Password",
      props: { name: "password", type: "password", minLength: "5" },
    },
  ];

  const onSubmit = () => {
    return;
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
        submitMsg={editMsg}
        onSubmit={onSubmit}
        styles={styles}
      />
    </section>
  );
};

export default SettingsEdit;
