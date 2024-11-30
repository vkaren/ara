import React from "react";
import { TextField, Box, InputLabel } from "@mui/material";

interface ITextFieldOutsideLabelProps {
  id: string;
  label: string;
}

const TextFieldOutsideLabel = ({ id, label }: ITextFieldOutsideLabelProps) => {
  return (
    <Box>
      <InputLabel
        sx={{
          fontSize: "14px",
        }}
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <TextField id={id} InputProps={{ sx: { borderRadius: "10px" } }} size="small" />
    </Box>
  );
};

export default TextFieldOutsideLabel;
