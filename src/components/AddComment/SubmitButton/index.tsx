import Button from "@mui/material/Button";
import type { ReplyContext } from "@app-types/ui";

const SubmitButton = ({
  isAReply,
  disabled = false,
}: {
  isAReply?: ReplyContext;
  disabled?: boolean;
}) => {
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
