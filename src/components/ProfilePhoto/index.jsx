import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@context/themeContext";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const ProfilePhoto = ({ photoUrl, profilePage }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles["profile-photo"]} ${
        profilePage && styles["profile-page"]
      } ${darkTheme && styles["dark-mode"]}`}
    >
      {photoUrl ? (
        <Image src={photoUrl} alt="User avatar" fill />
      ) : (
        <IconComponent
          name="profile"
          className={styles["profile-photo__default"]}
        />
      )}
    </div>
  );
};

export default ProfilePhoto;
