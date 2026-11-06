import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconComponent from "@components/Icon";

const FileUploaded = ({ file }) => {
  return (
    <Paper
      variant="outlined"
      component={Stack}
      spacing={1}
      sx={{
        minHeight: 160,
        borderColor: "primary.main",
        p: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent name="upload" style={{ width: 48, height: 48 }} />
      <Typography variant="body2" align="center">
        {file || "No file selected"}
      </Typography>
    </Paper>
  );
};

export default FileUploaded;
