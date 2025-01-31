import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";

interface TextareaProps {
  value?: string;
  placeholderLocal?: string;
  onChange: (value: string) => void;
}

const Textarea = ({ onChange, value, placeholderLocal }: TextareaProps) => {
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <TextField
      placeholder={placeholderLocal && t(placeholderLocal)}
      multiline
      fullWidth
      value={value}
      onChange={handleChange}
      rows={2}
      sx={{
        marginBottom: 1,
      }}
    />
  );
};

export default Textarea;
