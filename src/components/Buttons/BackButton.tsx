import { Icon } from "@iconify/react";
import { IconButton, useTheme } from "@mui/material";

interface BackButtonProps {
  onBack: () => void;
}

const BackButton = ({ onBack }: BackButtonProps) => {
  const theme = useTheme();

  return (
    <IconButton onClick={onBack}>
      <Icon
        icon={"mdi:arrow-back-rounded"}
        width={24}
        height={24}
        color={theme.palette.secondary.main}
      />
    </IconButton>
  );
};
export default BackButton;
