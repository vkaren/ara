import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Menu, MenuItem, Box, Theme, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface PostManagementProps {
  theme: Theme;
  onClickDelete: () => void;
}

// TODO: Management controller
const Management = ({ theme, onClickDelete }: PostManagementProps) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleDeleteClick = () => {
  //   handleClose();
  //   setDeleteDialogOpen(true);
  // };

  // const handleDeleteConfirm = () => {
  //   setDeleteDialogOpen(false);
  //   onClickDelete();
  // };

  return (
    <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
      <IconButton onClick={handleClick} color="primary">
        <Icon icon={"mdi:more-horiz"} />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
        <MenuItem onClick={onClickDelete}>
          <Icon icon={"mdi:delete"} color={theme.palette.error.main} />
          <Typography variant="caption" color={theme.palette.error.main} ml={"5px"}>
            {t("common.delete")}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Management;
