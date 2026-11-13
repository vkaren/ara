import { createRef, useContext, useEffect, useState, type FormEvent } from "react";
import { UserContext } from "@context/userContext";
import Alert from "@mui/material/Alert";
import api from "@utils/api";
import validateImageFile from "@utils/validateImageFile";
import ProfilePhoto from "@components/ProfilePhoto";
import Textarea from "./Textarea";
import InsertedImage from "./InsertedImage";
import SubmitButton from "./SubmitButton";
import Box from "@mui/material/Box";
import type { ApiRequest } from "@app-types/api";
import type { ReplyContext } from "@app-types/ui";

const AddComment = ({ isAReply = undefined }: { isAReply?: ReplyContext }) => {
  const { userId, getUserData } = useContext(UserContext);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = createRef<HTMLFormElement>();

  useEffect(() => {
    if (!userId) return;

    getUserData().then((userData) => {
      if ("profile_photo" in userData) setProfilePhoto(userData.profile_photo || null);
    });
  }, [getUserData, userId]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    const formData = new FormData(form.current);
    setErrorMessage("");

    const canAddComment = validateForm(formData);

    if (canAddComment) {
      form.current.reset();

      setIsSubmitting(true);
      const response = await sendComment(formData);
      setIsSubmitting(false);

      if (response.error) {
        setErrorMessage(response.message || "Unable to publish your comment.");
        return;
      }

      if (isAReply) {
        isAReply.closeModal?.();
      }
    }
  };

  const validateForm = (formData: FormData) => {
    const postContent = formData.get("content");
    const insertedImageEntry = formData.get("inserted_image");
    const insertedImage =
      insertedImageEntry instanceof File ? insertedImageEntry : null;
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

    formData.set("author_id", String(userId));

    return true;
  };

  const sendComment = async (formData: FormData) => {
    const apiRequest: ApiRequest = {
      method: "POST",
      route: isAReply ? "reply" : "post",
      type: "multipart/form-data",
      body: formData,
    };

    if (!isAReply) {
      apiRequest.route = "post";
    } else {
      formData.append("replying_to_post", String(isAReply.replyingToPost));
      formData.append("replying_to_user", String(isAReply.replyingToUser));

      apiRequest.route = "reply";
    }

    return await api(apiRequest);
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={onSubmit}
      sx={{
        display: "grid",
        gridTemplateColumns: "40px minmax(0, 1fr) auto",
        alignItems: "center",
        gap: 1.5,
        width: isAReply ? "100%" : { xs: "calc(100% - 2rem)", sm: "85%" },
        maxWidth: 700,
        minWidth: 0,
        mb: 2,
        p: 2,
        border: 1,
        borderColor: "primary.main",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <ProfilePhoto photoUrl={profilePhoto} />

      <Textarea isAReply={isAReply} />

      <InsertedImage />

      {errorMessage && (
        <Alert severity="error" sx={{ gridColumn: "1 / -1" }}>
          {errorMessage}
        </Alert>
      )}

      <SubmitButton isAReply={isAReply} disabled={isSubmitting} />
    </Box>
  );
};

export default AddComment;
