import Button from "@mui/material/Button";

const SubmitButton = ({ isAReply, disabled = false }) => {
  return (
    <Button
      type="submit"
      disabled={disabled}
      variant="contained"
      sx={{
        gridColumn: "3 / 4",
        gridRow: "3 / 4",
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
