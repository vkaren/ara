import { createRef, useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import ProfilePhoto from "@components/ProfilePhoto";
import Textarea from "./Textarea";
import InsertedImage from "./InsertedImage";
import SubmitButton from "./SubmitButton";
import styles from "./styles.module.css";

const AddComment = ({ isAReply }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { userId, userData } = useContext(UserContext);
  const form = createRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const canAddComment = validateForm(formData);

    if (canAddComment) {
      form.current.reset();

      await sendComment(formData);
    }
  };

  const validateForm = (formData) => {
    const postContent = formData.get("content");
    const postInsertedImage = formData.get("inserted_image").name;

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
      className={`${styles["add-comment__section"]} ${
        isAReply && styles["reply"]
      } ${darkTheme && styles["dark-mode"]}`}
    >
      <ProfilePhoto photoUrl={userData?.profile_photo} />

      <Textarea isAReply={isAReply} />

      <InsertedImage />

      <SubmitButton isAReply={isAReply} onSubmit={onSubmit} />
    </form>
  );
};

export default AddComment;
