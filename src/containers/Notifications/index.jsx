import NotifInfo from "./NotifInfo";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

const Notifications = ({ notifications = [] }) => {
  return (
    <section className={`${styles["notifs-section"]} bckgBlack clrWhite`}>
      <h2 className={styles["notifs-section__title"]}>Notifications</h2>

      <ul className={styles["notifs-section__list"]}>
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <NotifInfo
              key={`notif-${notif.id}`}
              notifFrom={notif.notif_from}
              postId={notif.post_id}
              type={notif.type}
              seen={notif.seen}
            />
          ))
        ) : (
          <Typography component="li" color="text.secondary" sx={{ p: 2 }} role="status">
            You have no notifications.
          </Typography>
        )}
      </ul>
    </section>
  );
};

export default Notifications;
