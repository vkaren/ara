import { useContext, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { UserContext } from "@context/userContext";
import Typography from "@mui/material/Typography";
import api from "@utils/api";
import { profileUpdateSchema } from "@validation/authSchemas";
import validateSchema from "@validation/validateSchema";
import validateImageFile from "@utils/validateImageFile";
import Form from "@components/Form";
import FileUploaded from "../FileUploaded";

const SettingsEdit = ({ userInfo }) => {
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
        defaultValue: userInfo?.nickname || "",
      },
    },
    {
      title: "Bio",
      props: {
        name: "bio",
        type: "text",
        defaultValue: userInfo?.bio || "",
      },
    },
    {
      title: "Profile picture",
      props: {
        name: "profile_photo",
        type: "file",
        accept: "image/png,image/jpeg",
        onChange: (e) => {
          setFileUploaded(e.currentTarget.files[0]?.name || "");
        },
      },
      anotherComponent: (file) => <FileUploaded file={file} />,
    },
    {
      title: "Username",
      props: {
        name: "username",
        type: "text",
        defaultValue: userInfo?.username || "",
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
    const profilePictureFile = formData.get("profile_photo");
    const profilePicture = profilePictureFile?.name || "";
    const username = formData.get("username");
    const password = formData.get("password");

    const values = {
      nickname,
      bio,
      username,
      password,
    };
    const imageError = validateImageFile(profilePictureFile);
    const hasChanges =
      nickname !== (userInfo?.nickname || "") ||
      bio !== (userInfo?.bio || "") ||
      username !== (userInfo?.username || "") ||
      Boolean(password) ||
      Boolean(profilePicture);
    const { error, message } = validateSchema(profileUpdateSchema, values);

    if (imageError) {
      setEditMsg({ error: true, msg: imageError });
    } else if (error) {
      setEditMsg({ error: true, msg: message });
    } else if (!hasChanges) {
      setEditMsg({ error: true, msg: "Add at least one profile change." });
    } else {
      updateProfile(formData);
    }
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
    <Paper
      component="section"
      variant="outlined"
      sx={{ width: "80%", maxWidth: 600, p: { xs: 2, sm: 4 }, borderColor: "primary.main" }}
    >
      <Stack spacing={3}>
      <Typography variant="h5" component="h2" fontWeight={600}>
        Settings
      </Typography>

      <Typography variant="h6" component="h3" fontWeight={500}>
        Edit Profile
      </Typography>

      <Form
        type="edit"
        form={formRef}
        inputs={formInputs}
        fileUploaded={fileUploaded}
        submitMsg={editMsg}
        onSubmit={onSubmit}
      />
      </Stack>
    </Paper>
  );
};

export default SettingsEdit;
