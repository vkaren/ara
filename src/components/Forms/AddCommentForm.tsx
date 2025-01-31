import React, { useMemo } from "react";
import { Card, Grid, SxProps, Theme } from "@mui/material";
import { Avatar } from "@components/Avatar";
import { SubmitButton, UploadImageButton } from "@components/Buttons";
import { UploadedImage } from "@components/Cards";
import Textarea from "../Inputs/Textarea";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { addCommentSchema } from "config/validators";

interface AddCommentProps {
  type?: "replyComment" | "postComment";
  onSubmit: (data: any) => void;
}

const AddComment = ({ type = "postComment", onSubmit }: AddCommentProps) => {
  const formMethods = useForm({
    resolver: joiResolver(addCommentSchema),
  });
  const imageFile = useWatch({ control: formMethods.control, name: "insertedImage" });
  const imageUrl = useMemo(() => {
    return imageFile ? URL.createObjectURL(imageFile) : null;
  }, [imageFile]);

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

  return (
    <FormProvider {...formMethods}>
      <Card sx={cardStyles} component={"form"} onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12}>
            <Controller
              name={"comment"}
              control={formMethods.control}
              render={({ field }) => (
                <Textarea
                  placeholderLocal={
                    type === "replyComment"
                      ? "views.home.adc.replyPlaceholder"
                      : "views.home.adc.placeholder"
                  }
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} padding={0}>
            <Grid container alignItems="center" justifyContent="space-between" pt={0}>
              <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {type === "postComment" && <Avatar />}
                {imageUrl && <UploadedImage url={imageUrl} />}
              </Grid>

              <Grid item sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <UploadImageButton name="insertedImage" />
                <SubmitButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </FormProvider>
  );
};

export default AddComment;
