import { ToggleButton } from "@mui/material";
import { MouseEvent, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface SubmitButtonProps {
  isFollowing?: boolean;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const FollowButton = ({ isFollowing, onClick }: SubmitButtonProps) => {
  const { t } = useTranslation();
  const value = useMemo(
    () => (isFollowing ? t("common.following") : t("common.follow")),
    [isFollowing, t]
  );

  return (
    <ToggleButton
      value={value}
      selected={isFollowing}
      onChange={onClick}
      sx={{
        fontSize: "11px",
        textTransform: "capitalize",
        py: "0px",
        px: "12px",
        borderRadius: "5px",
        backgroundColor: "primary.main",
        borderColor: "primary.main",
        color: "common.white",
        "&:hover": {
          color: "primary.main",
        },
        "&.Mui-selected": {
          backgroundColor: "common.white",
          borderColor: "primary.main",
          color: "primary.main",
          "&:hover": {
            color: "error.main",
            borderColor: "error.main",
            backgroundColor: "common.white",
          },
        },
      }}
    >
      {value}
    </ToggleButton>
  );
};
export default FollowButton;
