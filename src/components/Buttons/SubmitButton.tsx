import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  const { t } = useTranslation();

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
