import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const InsertedImage = () => {
  return (
    <label className={styles["adc_inserted-image"]} htmlFor="inserted_image">
      <input id="inserted_image" name="inserted_image" type="file" accept=".png,.jpg" />
      <IconComponent name={"insertedImage"} className="fillLgtPurple" />
    </label>
  );
};
export default InsertedImage;
