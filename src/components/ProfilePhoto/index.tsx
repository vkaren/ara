import Image from "next/image";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const ProfilePhoto = ({ photoUrl, profilePage }) => {
  return (
    <div
      className={`${styles["profile-photo"]} ${profilePage && styles["profile-page"]} bckgLgtBlack`}
    >
      {photoUrl ? (
        <Image src={photoUrl} alt="User avatar" fill />
      ) : (
        <IconComponent
          name="profile"
          className={`${styles["profile-photo__default"]} fillVryLgtGray`}
        />
      )}
    </div>
  );
};

export default ProfilePhoto;
