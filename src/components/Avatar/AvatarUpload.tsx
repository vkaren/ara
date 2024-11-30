import React, { useState, useRef, ChangeEvent } from "react";
import { Avatar, Badge, IconButton, Snackbar } from "@mui/material";
import { Icon } from "@iconify/react";

interface IAvatarUploadProps {
  initialImage?: string;
  onImageUpload: (file: File) => void;
}

const AvatarUpload = ({ initialImage, onImageUpload }: IAvatarUploadProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(initialImage || "");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleCloseSnackbar = () => {
    setError(null);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <IconButton
            onClick={handleButtonClick}
            sx={{
              border: 1,
              borderColor: "primary.light",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.paper" },
            }}
          >
            <Icon icon={"material-symbols:add-photo-alternate-outline"} width={16} height={16} />
          </IconButton>
        }
      >
        <Avatar src={avatarUrl} sx={{ width: 100, height: 100 }} />
      </Badge>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />
    </div>
  );
};

export default AvatarUpload;
