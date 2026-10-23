import Image from "next/image";
import Box from "@mui/material/Box";

const PostInsertedImage = ({ insertedImage, isHomeOrProfilePage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isHomeOrProfilePage ? 200 : 250,
        mb: 1,
      }}
    >
      <Image
        src={insertedImage}
        alt="post content"
        fill
        style={{
          objectFit: isHomeOrProfilePage ? "cover" : "contain",
          borderRadius: 8,
        }}
      />
    </Box>
  );
};

export default PostInsertedImage;
