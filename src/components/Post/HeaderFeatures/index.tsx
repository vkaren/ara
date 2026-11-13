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
import type { ApiRequest } from "@app-types/api";
import type { ReplyContext } from "@app-types/ui";
import type { MouseEvent } from "react";

const HeaderFeatures = ({
  id,
  authorId,
  isAReply,
}: {
  id: number;
  authorId: number;
  isAReply?: ReplyContext;
}) => {
  const { savePostDeleted, saveReplyDeleted } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isDeletingPost, setIsDeletingPost] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const closeMenu = () => setAnchorEl(null);

  const toggleDeleteModal = (event?: MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    closeMenu();
    setIsDeletingPost((isOpen) => !isOpen);
  };

  const onDeletePost = async (event?: MouseEvent<HTMLElement>) => {
    event?.stopPropagation();

    const request: ApiRequest & { body: Record<string, unknown> } = {
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
    const isDeleted = await api<{
      postDeleted?: number;
      replyDeleted?: number;
    }>(request);
    setIsDeleting(false);

    if ("error" in isDeleted) return;

    if (isDeleted) {
      if (isAReply && isDeleted.replyDeleted) {
        saveReplyDeleted(isDeleted.replyDeleted);
      } else if (!isAReply && isDeleted.postDeleted) {
        savePostDeleted(isDeleted.postDeleted);
      }

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
