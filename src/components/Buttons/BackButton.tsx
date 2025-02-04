import { Icon } from "@iconify/react";
import { IconButton, useTheme } from "@mui/material";

interface BackButtonProps {
  onBack: () => void;
}

const BackButton = ({ onBack }: BackButtonProps) => {
  const theme = useTheme();

  return (
    <IconButton onClick={onBack} sx={{ alignSelf: "flex-start" }}>
      <Icon icon={"mdi:arrow-back"} width={24} height={24} color={theme.palette.secondary.main} />
    </IconButton>
  );
};
export default BackButton;
