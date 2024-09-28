import { TextField } from "@mui/material";
import { useAppTranslation } from "hooks";
import { ChangeEvent } from "react";

interface TextareaProps {
  value?: string;
  placeholderLocal?: string;
  onChange: (value: string) => void;
}

const Textarea = ({
  onChange,
  value,
  placeholderLocal = "views.home.adc.placeholder",
}: TextareaProps) => {
  const { t } = useAppTranslation();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <TextField
      placeholder={t(placeholderLocal)}
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
