import { Icon } from "@iconify/react";
import { IconButton, useTheme } from "@mui/material";

interface UploadImgButtonProps {
  onUpload: () => void;
}

const UploadImageButton = ({ onUpload }: UploadImgButtonProps) => {
  const theme = useTheme();

  return (
    <IconButton onClick={onUpload}>
      <Icon
        icon={"mdi:image-outline"}
        width={20}
        height={20}
        color={theme.palette.secondary.main}
      />
    </IconButton>
  );
};
export default UploadImageButton;
