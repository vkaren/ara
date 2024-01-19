import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import ProfilePhoto from "@components/ProfilePhoto";
import Textarea from "./Textarea";
import InsertedImage from "./InsertedImage";
import SubmitButton from "./SubmitButton";
import styles from "./styles.module.css";

const AddComment = ({ isAReply }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <form
      // ref={addCommentForm}
      className={`${styles["add-comment__section"]} ${
        isAReply && styles["reply"]
      } ${darkTheme && styles["dark-mode"]}`}
    >
      <ProfilePhoto
      // photoUrl={userData.profile_photo}
      />

      <Textarea isAReply={isAReply} />

      <InsertedImage />

      <SubmitButton isAReply={isAReply} />
    </form>
  );
};

export default AddComment;
