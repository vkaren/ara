import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      type="submit"
      sx={{ minWidth: "50px", height: "25px", p: 0, fontSize: "12px", boxShadow: 0 }}
    >
      {t("common.send")}
    </Button>
  );
};
export default SubmitButton;
