import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import NotifInfo from "./NotifInfo";
import styles from "./styles.module.css";

const notifTest = {
  notif_from: {
    id: 1,
    username: "karen",
  },
  post_id: 1,
  type: "like",
  seen: false,
};

const Notifications = ({ notifications = [notifTest] }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section
      className={`${styles["notifs-section"]} ${
        darkTheme && styles["dark-mode"]
      }`}
    >
      <h2 className={styles["notifs-section__title"]}>Notifications</h2>

      <ul className={styles["notifs-section__list"]}>
        {notifications.map((notif) => (
          <NotifInfo
            key={`notif-${notif.id}`}
            notifFrom={notif.notif_from}
            postId={notif.post_id}
            type={notif.type}
            seen={notif.seen}
            darkTheme={darkTheme}
          />
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
