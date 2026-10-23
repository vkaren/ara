import AddComment from "@components/AddComment";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

const ReplyBox = ({ replyingToPost, replyingToUser, closeModal }) => (
  <Dialog open fullWidth maxWidth="sm" onClose={closeModal}>
    <DialogTitle sx={{ pr: 6 }}>
      Reply
      <IconButton
        onClick={closeModal}
        aria-label="Close reply dialog"
        sx={{ position: "absolute", right: 12, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <AddComment
        isAReply={{
          replyingToPost,
          replyingToUser,
          closeModal,
        }}
      />
    </DialogContent>
  </Dialog>
);
export default ReplyBox;
