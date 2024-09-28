import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAppTranslation } from "hooks";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteDialog = ({ isOpen, onClose, onDelete }: DeleteDialogProps) => {
  const { t } = useAppTranslation();
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t("views.home.confirmDelete")}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t("views.home.deletePost")}
        </DialogContentText>
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
