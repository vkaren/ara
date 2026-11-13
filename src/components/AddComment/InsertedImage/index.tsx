import { useEffect, useState, type ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconComponent from "@components/Icon";

const InsertedImage = ({ resetKey = 0 }: { resetKey?: number }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  useEffect(() => {
    setImagePreview(null);
    setImageName("");
  }, [resetKey]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setImageName(file.name);
  };

  return (
    <Box
      sx={{
        minWidth: "fit-content",
        gridColumn: 1,
        gridRow: 3,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {imagePreview && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: "fit-content",
          }}
        >
          <Box
            component="img"
            src={imagePreview}
            alt={`Preview of ${imageName}`}
            sx={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: 1,
              border: 1,
              borderColor: "divider",
            }}
          />
        </Box>
      )}

      <Button
        component="label"
        variant="text"
        size="small"
        startIcon={<IconComponent name="insertedImage" color="action" />}
        sx={{ flexShrink: 0, textTransform: "none" }}
      >
        {imagePreview ? "Change image" : "Add image"}
        <input
          id="inserted_image"
          name="inserted_image"
          type="file"
          accept="image/png,image/jpeg"
          onChange={handleImageChange}
          hidden
        />
      </Button>
    </Box>
  );
};
export default InsertedImage;
