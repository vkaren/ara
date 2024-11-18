import React, { useMemo, useState } from "react";
import { Card, Grid, SxProps, Theme } from "@mui/material";
import { Avatar } from "@components/Avatar";
import { SubmitButton, UploadImageButton } from "@components/Buttons";
import { UploadedImage } from "@components/Cards";
import Textarea from "./Textarea";

interface AddCommentProps {
  type?: "replyComment" | "postComment";
  onSend?: () => void;
  onUploadImage?: () => void;
}

const AddComment = ({ type = "postComment", onSend, onUploadImage }: AddCommentProps) => {
  const [comment, setComment] = useState<string>("");
  const cardStyles: SxProps<Theme> = useMemo(
    () =>
      type === "postComment"
        ? {
            p: "12px",
            borderRadius: "5px",
            boxShadow: 1,
          }
        : {
            py: "12px",
            boxShadow: 0,
            width: "100%",
            height: "100%",
          },
    [type]
  );

  const handleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSend && onSend();
  };

  const handleUploadImage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onUploadImage && onUploadImage();
  };

  return (
    <Card sx={cardStyles}>
      <Grid container>
        <Grid item xs={12}>
          <Textarea
            value={comment}
            onChange={setComment}
            placeholderLocal={
              type === "replyComment" ? "views.home.adc.replyPlaceholder" : undefined
            }
          />
        </Grid>

        <Grid item xs={12} padding={0}>
          <Grid container alignItems="center" justifyContent="space-between" pt={0}>
            <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {type === "postComment" && <Avatar />}
              <UploadedImage
                url="/assets/ara.png" // TODO: Remove this
              />
            </Grid>

            <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <UploadImageButton onUpload={handleUploadImage} />
              <SubmitButton onSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AddComment;
