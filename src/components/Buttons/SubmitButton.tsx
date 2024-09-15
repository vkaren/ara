import { Button } from "@mui/material";
import { useAppTranslation } from "hooks";

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  const { t } = useAppTranslation();

  return (
    <Button variant="contained" onClick={onSubmit} sx={{ p: "2px", fontSize: "12px" }}>
      {t("common.send")}
    </Button>
  );
};
export default SubmitButton;
