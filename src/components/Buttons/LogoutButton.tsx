import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Button, SxProps, Theme, Typography } from "@mui/material";

interface LogoutButtonProps {
  theme: Theme;
  styles?: SxProps;
}

const LogoutButton = ({ theme, styles }: LogoutButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      sx={{
        gap: "8px",
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: theme.palette.grey[200] },
        ...styles,
      }}
    >
      <Typography variant="caption" color={theme.palette.primary.main} fontWeight={500}>
        {t(`common.logout`)}
      </Typography>
      <Icon icon="mdi:logout" width={15} height={15} color={theme.palette.primary.main} />
    </Button>
  );
};

export default LogoutButton;
