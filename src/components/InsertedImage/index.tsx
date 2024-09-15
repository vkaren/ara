import { Box, useTheme } from "@mui/material";

interface InsertedImageProps {
  url?: string;
}

const InsertedImage = ({ url }: InsertedImageProps) => {
  const theme = useTheme();

  return url ? (
    <Box
      width={35}
      height={35}
      p={"4px"}
      borderRadius={"5px"}
      border={`1px solid ${theme.palette.grey[300]}`}
    >
      <Box
        component="img"
        src={url}
        alt="inserted image"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  ) : null;
};

export default InsertedImage;
