import AppLayout from "@containers/AppLayout";
import Notifications from "@containers/Notifications";

const NotificationsPage = ({ userNotifs }) => {
  return (
    <AppLayout>
      <Notifications notifications={userNotifs} />
    </AppLayout>
  );
};

export default NotificationsPage;
