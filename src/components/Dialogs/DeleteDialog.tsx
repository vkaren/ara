import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface DeleteDialogProps {
  subtitle?: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteDialog = ({ subtitle, isOpen, onClose, onDelete }: DeleteDialogProps) => {
  const { t } = useTranslation();
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t("common.confirmDelete")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" sx={{ px: "15px" }}>
          {t("common.cancel")}
        </Button>
        <Button onClick={onDelete} color="primary" autoFocus sx={{ px: "15px" }}>
          {t("common.delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
