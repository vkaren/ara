import Link from "next/link";
import IconComponent from "@components/Icon";

const EditOption = ({ styles }) => {
  return (
    <li>
      <Link
        id="hover"
        className={`${styles["settings-option"]} clrWhite hoverBlack`}
        href={"/settings/edit"}
      >
        <span className={styles["settings-option__title"]}>Edit profile</span>
        <IconComponent
          name="arrow"
          className={`${styles["settings-option__icon"]} fillLgtPurple`}
        />
      </Link>
    </li>
  );
};

export default EditOption;
