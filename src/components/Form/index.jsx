import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Form = ({
  form,
  inputs = [],
  type,
  fileUploaded,
  submitMsg = {},
  onSubmit,
  children,
}) => {
  return (
    <Box
      component="form"
      ref={form}
      onSubmit={onSubmit}
      noValidate
      sx={{
        width: "100%",
        maxWidth: type === "edit" ? 520 : 380,
        alignItems: type === "edit" ? "flex-start" : "stretch",
        gap: 0,
        px: { xs: 0, sm: 1 },
      }}
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        {inputs.map((input) => {
          const {
            name,
            type: inputType,
            accept,
            onChange,
            required,
            minLength,
            placeholder,
          } = input.props;
          const inputId = `${type}-${name}`;

          if (inputType === "file") {
            return (
              <Box
                key={name}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Button
                  component="label"
                  variant="outlined"
                  color="primary"
                  sx={{ alignSelf: "flex-start" }}
                >
                  {input.title}
                  <input
                    id={inputId}
                    name={name}
                    type="file"
                    accept={accept}
                    onChange={onChange}
                    hidden
                  />
                </Button>
                {input.anotherComponent && input.anotherComponent(fileUploaded)}
              </Box>
            );
          }

          return (
            <TextField
              key={name}
              id={inputId}
              name={name}
              label={input.title}
              type={inputType}
              required={required}
              placeholder={placeholder}
              error={Boolean(submitMsg.error)}
              inputProps={{ minLength }}
              onChange={onChange}
              variant="outlined"
              size="medium"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 6,
                  padding: 1.5,
                },
              }}
            />
          );
        })}

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            alignSelf: type === "edit" ? "flex-end" : "stretch",
            minHeight: 48,
            borderRadius: 6,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          {type === "edit" ? "Save" : "Continue"}
        </Button>

        {submitMsg.msg && (
          <Alert severity={submitMsg.error ? "error" : "success"}>
            {submitMsg.msg}
          </Alert>
        )}

        {children && (
          <Typography component="div" align="center">
            {children}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default Form;
