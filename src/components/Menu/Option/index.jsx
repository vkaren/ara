import IconComponent from "@components/Icon";
import Link from "next/link";
import styles from "./styles.module.css";

const Option = ({ type, notify }) => {
  return (
    <li className={styles["option"]}>
      <Link
        className={`${styles["option__link"]}  ${
          type === "notifications" && styles["option__notif"]
        }  ${notify && styles["notify"]}`}
        href={`/${type}`}
      >
        <IconComponent name={type} />

        <span
          className={styles["option__title"]}
        >{`${type[0].toUpperCase()}${type.slice(1)}`}</span>
      </Link>
    </li>
  );
};

export default Option;
