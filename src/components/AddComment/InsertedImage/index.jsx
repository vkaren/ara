import Button from "@mui/material/Button";
import IconComponent from "@components/Icon";

const InsertedImage = () => {
  return (
    <Button
      component="label"
      variant="text"
      size="small"
      startIcon={<IconComponent name="insertedImage" />}
      sx={{ justifySelf: "start", textTransform: "none" }}
    >
      Add image
      <input
        id="inserted_image"
        name="inserted_image"
        type="file"
        accept=".png,.jpg"
        hidden
      />
    </Button>
  );
};
export default InsertedImage;
