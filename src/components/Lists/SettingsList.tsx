import { Icon } from "@iconify/react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomListItemButton = styled(ListItemButton)(() => ({
  margin: "5px 0",
  borderRadius: "5px",
}));

const CustomListItemText = styled(ListItemText)(() => ({
  ".MuiListItemText-primary": {
    fontSize: "14px",
  },
}));

const CustomListItemIcon = styled(ListItemIcon)(() => ({
  justifyContent: "flex-end",
}));

interface ISettingsProps {
  onEditClick: () => void;
  onDarkModeClick: () => void;
  onDeleteClick: () => void;
}

const SettingsList = ({ onEditClick, onDarkModeClick, onDeleteClick }: ISettingsProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <List sx={{ p: 0 }}>
      <CustomListItemButton onClick={onEditClick}>
        <CustomListItemText primary={t("views.settings.edit")} />
        <CustomListItemIcon>
          <Icon icon={"mdi:chevron-right"} width={24} height={24} />
        </CustomListItemIcon>
      </CustomListItemButton>

      <CustomListItemButton onClick={onDarkModeClick}>
        <CustomListItemText primary={t("views.settings.darkMode")} />
        <CustomListItemIcon>
          <Switch size="small" inputProps={{ "aria-label": t("views.settings.darkMode") }} />
        </CustomListItemIcon>
      </CustomListItemButton>

      <CustomListItemButton
        onClick={onDeleteClick}
        sx={{
          "&:hover": {
            bgcolor: theme.palette.error[200],
          },
        }}
      >
        <CustomListItemText
          primary={t("views.settings.deleteAccount")}
          sx={{
            ".MuiListItemText-primary": {
              color: theme.palette.error.main,
            },
          }}
        />
        <CustomListItemIcon>
          <Icon
            icon={"mdi:delete-outline"}
            width={24}
            height={24}
            color={theme.palette.error.main}
          />
        </CustomListItemIcon>
      </CustomListItemButton>
    </List>
  );
};

export default SettingsList;
