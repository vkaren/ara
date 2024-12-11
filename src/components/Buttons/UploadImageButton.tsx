import { Icon } from "@iconify/react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

interface UploadImgButtonProps {
  name: string;
}

const UploadImageButton = ({ name }: UploadImgButtonProps) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const {
    field: { onChange },
  } = useController({
    name,
    control,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="upload-image-input"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-image-input">
        <IconButton component="span">
          <Icon
            icon={"mdi:image-outline"}
            width={20}
            height={20}
            color={theme.palette.secondary.main}
          />
        </IconButton>
      </label>
    </Box>
  );
};

export default UploadImageButton;
