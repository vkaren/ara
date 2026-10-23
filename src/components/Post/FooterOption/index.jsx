import Button from "@mui/material/Button";
import IconComponent from "@components/Icon";

const FooterOption = ({ type, text, haveLike, onClick }) => {
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
      size="small"
      startIcon={<IconComponent name={type} style={iconStyle} />}
      sx={{ minWidth: 0, textTransform: "none", color: "primary.main" }}
    >
      {text}
    </Button>
  );
};

export default FooterOption;
