import Typography from "@mui/material/Typography";

const ContentIntro = ({ contentLetters = [""] }) => {
  return (
    <Typography component="span" variant="body1" fontWeight={500}>
      {contentLetters.length > 50
        ? contentLetters.slice(0, 40).join("")
        : contentLetters.join("")}
    </Typography>
  );
};

export default ContentIntro;
