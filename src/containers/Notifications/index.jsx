import NotifInfo from "./NotifInfo";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Notifications = ({ notifications = [] }) => {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        width: "80%",
        maxWidth: 600,
        p: { xs: 2, sm: 4 },
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h5" component="h2" fontWeight={600}>
        Notifications
      </Typography>

      <List sx={{ my: 4, p: 0 }}>
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
      </List>
    </Paper>
  );
};

export default Notifications;
