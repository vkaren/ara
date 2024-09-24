import React, { useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import ProfilePhoto from "@components/ProfilePhoto";
import Textarea from "../Textarea";
import InsertedImage from "../InsertedImage";
import { SubmitButton, UploadImageButton } from "@components/Buttons";

const AddComment = () => {
  const theme = useTheme();
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {};

  const handleUploadImage = () => {};

  return (
    <Box
      sx={{
        p: "12px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "5px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Textarea value={comment} onChange={setComment} />
        </Grid>

        <Grid item xs={12} padding={0}>
          <Grid container alignItems="center" justifyContent="space-between" pt={0}>
            <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <ProfilePhoto />
              <InsertedImage url="/assets/ara.png" />
            </Grid>

            <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <UploadImageButton onUpload={handleUploadImage} />
              <SubmitButton onSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddComment;
