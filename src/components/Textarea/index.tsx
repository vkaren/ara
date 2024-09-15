import { TextField } from "@mui/material";
import { useAppTranslation } from "hooks";
import { ChangeEvent } from "react";

interface TextareaProps {
  value?: string;
  onChange: (value: string) => void;
}

const Textarea = ({ onChange, value }: TextareaProps) => {
  const { t } = useAppTranslation();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <TextField
      placeholder={t("views.home.adc.placeholder")}
      multiline
      fullWidth
      value={value}
      onChange={handleChange}
      variant="outlined"
      rows={4}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default Textarea;
