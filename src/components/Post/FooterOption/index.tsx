import Button from "@mui/material/Button";
import IconComponent from "@components/Icon";
import type { MouseEvent } from "react";

const FooterOption = ({
  type,
  text,
  haveLike = false,
  onClick = undefined,
  disabled = false,
}: {
  type: "comment" | "reply" | "like";
  text: string | number;
  haveLike?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) => {
  const iconStyle = {
    width: type === "comment" ? 20 : 24,
    height: type === "comment" ? 20 : 24,
    fill: haveLike ? "#2d66f9" : type === "like" ? "transparent" : "#2d66f9",
    stroke: type === "like" ? "#2d66f9" : "none",
    strokeWidth: type === "like" ? 1.5 : 0,
  };

  return (
    <Button
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
      disabled={disabled}
      size="small"
      startIcon={<IconComponent name={type} style={iconStyle} />}
      sx={{ minWidth: 0, textTransform: "none", color: "primary.main" }}
    >
      {text}
    </Button>
  );
};

export default FooterOption;
