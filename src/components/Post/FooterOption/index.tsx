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
  return (
    <Button
      onClick={(event) => {
        event.stopPropagation();
        onClick?.(event);
      }}
      disabled={disabled}
      size="small"
      startIcon={
        <IconComponent
          name={type}
          active={type === "like" && haveLike}
          sx={{ fontSize: type === "comment" ? 20 : 24 }}
        />
      }
      sx={{ minWidth: 0, textTransform: "none", color: "primary.main" }}
    >
      {text}
    </Button>
  );
};

export default FooterOption;
