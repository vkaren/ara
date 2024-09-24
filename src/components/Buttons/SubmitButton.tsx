import { Button } from "@mui/material";
import { useAppTranslation } from "hooks";

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  const { t } = useAppTranslation();

  return (
    <Button
      variant="contained"
      onClick={onSubmit}
      sx={{ minWidth: "50px", height: "25px", p: 0, fontSize: "12px", boxShadow: 0 }}
    >
      {t("common.send")}
    </Button>
  );
};
export default SubmitButton;
