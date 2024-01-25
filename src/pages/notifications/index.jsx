import { useContext, useEffect } from "react";
import { AppContext } from "@context/appContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import { getItem } from "@utils/cookies";
import AppLayout from "@containers/AppLayout";
import Notifications from "@containers/Notifications";

export async function getServerSideProps({ req, res }) {
  const ssr = {
    req,
    res,
  };
  const props = {
    notifications: [],
  };

  const userId = getItem("user_id", ssr);

  const notifications = await api({
    method: "GET",
    route: `notification/${userId}`,
    ssr,
  });

  if (Array.isArray(notifications)) {
    props.notifications = notifications.reverse();
  }

  return { props };
}

const NotificationsPage = ({ notifications }) => {
  const { userId } = useContext(UserContext);
  const { updateSeenNotifs } = useContext(AppContext);

  useEffect(() => {
    if (userId) {
      updateSeenNotifs();
    }
  }, [userId]);

  return (
    <AppLayout>
      <Notifications notifications={notifications} />
    </AppLayout>
  );
};

export default NotificationsPage;
