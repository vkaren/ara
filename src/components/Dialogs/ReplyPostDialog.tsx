import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import AddComment from "@components/AddComment";
import { Icon } from "@iconify/react";
import ProfilePhoto from "@components/ProfilePhoto";

interface ReplyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onReply: () => void;
}

const ReplyPostDialog = ({ isOpen, onClose, onReply }: ReplyDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          pb: 0,
        }}
      >
        <ProfilePhoto />
        <IconButton
          size="small"
          sx={{
            gap: "2px",
            ml: "auto",
          }}
          color="primary"
          onClick={onClose}
        >
          <Icon icon={"mdi:close"} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ py: 0 }}>
        <AddComment type="replyComment" onSend={onReply} />
      </DialogContent>
    </Dialog>
  );
};

export default ReplyPostDialog;
