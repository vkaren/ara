import { Box, CardContent, CardMedia, Typography } from "@mui/material";

interface ContentProps {
  comment?: string;
  image?: string;
}

const Content = ({ comment = "", image = "" }: ContentProps) => {
  return (
    <CardContent sx={{ px: 0 }}>
      <Typography
        variant="body2"
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          maxHeight: 100,
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: 3,
          wordBreak: "break-word",
        }}
      >
        {comment}
      </Typography>

      <Box borderRadius={"5px"} overflow={"hidden"} mt={"10px"}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: 200,
            objectFit: "cover",
          }}
          image={image}
          alt="Live from space album cover"
        />
      </Box>
    </CardContent>
  );
};

export default Content;
