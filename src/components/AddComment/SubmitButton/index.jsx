import Button from "@mui/material/Button";

const SubmitButton = ({ isAReply }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        gridColumn: "3 / 4",
        gridRow: "2 / 3",
        justifySelf: "end",
        borderRadius: 2,
        fontWeight: 700,
        textTransform: "none",
      }}
    >
      {isAReply ? "Reply" : "Post"}
    </Button>
  );
};

export default SubmitButton;
