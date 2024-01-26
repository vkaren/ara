import { useContext } from "react";
import { AppContext } from "@context/appContext";
import { UserContext } from "@context/userContext";
import IconComponent from "@components/Icon";
import Link from "next/link";
import styles from "./styles.module.css";

const Option = ({ type }) => {
  const { haveNotifications } = useContext(AppContext);
  const { userId } = useContext(UserContext);

  return (
    <li className={styles["option"]}>
      <Link
        className={`${styles["option__link"]}  ${
          type === "notifications" && styles["option__notif"]
        }  ${haveNotifications && styles["notify"]}`}
        href={type === "profile" ? `/${type}/${userId}` : `/${type}`}
      >
        <IconComponent name={type} className="fillWhite" />

        <span
          className={`${styles["option__title"]} clrWhite`}
        >{`${type[0].toUpperCase()}${type.slice(1)}`}</span>
      </Link>
    </li>
  );
};

export default Option;
