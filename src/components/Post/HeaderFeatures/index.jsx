import { useContext, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AppContext } from "@context/appContext";
import DeleteModal from "@components/DeleteModal";
import api from "@utils/api";

const HeaderFeatures = ({ id, authorId, isAReply }) => {
  const { savePostDeleted, saveReplyDeleted } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDeletingPost, setIsDeletingPost] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const closeMenu = () => setAnchorEl(null);

  const toggleDeleteModal = (event) => {
    event?.stopPropagation();
    closeMenu();
    setIsDeletingPost((isOpen) => !isOpen);
  };

  const onDeletePost = async (event) => {
    event?.stopPropagation();

    const request = {
      method: "DELETE",
      type: "application/json",
      body: { author_id: authorId },
      route: isAReply ? "reply" : "post",
    };

    if (isAReply) {
      request.body.reply_id = id;
    } else {
      request.body.post_id = id;
    }

    setIsDeleting(true);
    const isDeleted = await api(request);
    setIsDeleting(false);

    if (isDeleted && !isDeleted.error) {
      isAReply
        ? saveReplyDeleted(isDeleted.replyDeleted)
        : savePostDeleted(isDeleted.postDeleted);

      setIsDeletingPost(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={(event) => {
          event.stopPropagation();
          setAnchorEl(event.currentTarget);
        }}
        aria-label="Post options"
        aria-haspopup="menu"
        aria-expanded={Boolean(anchorEl)}
        size="small"
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        onClick={(event) => event.stopPropagation()}
      >
        <MenuItem onClick={toggleDeleteModal} sx={{ color: "error.main" }}>
          <ListItemIcon>
            <DeleteOutlineIcon color="error" fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>

      {isDeletingPost && (
        <DeleteModal
          type={isAReply ? "reply" : "post"}
          onDelete={onDeletePost}
          onCancelDelete={toggleDeleteModal}
          isLoading={isDeleting}
        />
      )}
    </>
  );
};

export default HeaderFeatures;
