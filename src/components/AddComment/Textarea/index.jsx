import TextField from "@mui/material/TextField";

const Textarea = ({ isAReply }) => {
  return (
    <TextField
      name="content"
      multiline
      minRows={3}
      placeholder={isAReply ? "Reply" : "What's happenning?"}
      fullWidth
      maxLength={250}
      sx={{
        gridColumn: "1 / -1",
        mb: 1.5,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: "background.paper",
        },
      }}
    />
  );
};

export default Textarea;
