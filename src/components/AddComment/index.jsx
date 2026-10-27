import { createRef, useContext, useEffect, useState } from "react";
import { UserContext } from "@context/userContext";
import Alert from "@mui/material/Alert";
import api from "@utils/api";
import validateImageFile from "@utils/validateImageFile";
import ProfilePhoto from "@components/ProfilePhoto";
import Textarea from "./Textarea";
import InsertedImage from "./InsertedImage";
import SubmitButton from "./SubmitButton";
import styles from "./styles.module.css";

const AddComment = ({ isAReply }) => {
  const { userId, getUserData } = useContext(UserContext);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const form = createRef();

  useEffect(() => {
    if (userId) {
      getProfilePhoto();
    }
  }, [userId]);

  const getProfilePhoto = async () => {
    const userData = await getUserData();
    const profilePh = userData.profile_photo;

    setProfilePhoto(profilePh);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    setErrorMessage("");

    const canAddComment = validateForm(formData);

    if (canAddComment) {
      form.current.reset();

      await sendComment(formData);

      if (isAReply) {
        isAReply.closeModal();
      }
    }
  };

  const validateForm = (formData) => {
    const postContent = formData.get("content");
    const insertedImage = formData.get("inserted_image");
    const imageError = validateImageFile(insertedImage);

    if (imageError) {
      setErrorMessage(imageError);
      return false;
    }

    const postInsertedImage = insertedImage?.name;

    if (!postContent && !postInsertedImage) {
      return false;
    } else if (!postContent && postInsertedImage) {
      formData.set("content", " ");
    }

    formData.set("author_id", userId);

    return true;
  };

  const sendComment = async (formData) => {
    const apiRequest = {
      method: "POST",
      type: "multipart/form-data",
      body: formData,
    };

    if (!isAReply) {
      apiRequest.route = "post";
    } else {
      formData.append("replying_to_post", isAReply.replyingToPost);
      formData.append("replying_to_user", isAReply.replyingToUser);

      apiRequest.route = "reply";
    }

    return await api(apiRequest);
  };

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      className={`${styles["add-comment__section"]} ${
        isAReply && styles["reply"]
      } bckgBlack
      `}
    >
      <ProfilePhoto photoUrl={profilePhoto} />

      <Textarea isAReply={isAReply} />

      <InsertedImage />

      {errorMessage && (
        <Alert severity="error" sx={{ gridColumn: "1 / -1" }}>
          {errorMessage}
        </Alert>
      )}

      <SubmitButton isAReply={isAReply} />
    </form>
  );
};

export default AddComment;
