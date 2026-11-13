import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "@context/appContext";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import { getItem } from "@utils/cookies";
import AppLayout from "@containers/AppLayout";
import Notifications from "@containers/Notifications";
import { buildPaginatedRoute, normalizePaginatedResponse } from "@utils/pagination";
import type { Notification } from "@app-types/domain";
import type { Pagination } from "@app-types/api";

export async function getServerSideProps({ req, res }) {
  const ssr = {
    req,
    res,
  };
  const props: { notifications: Notification[]; pagination: Pagination } = {
    notifications: [],
    pagination: { page: 1, limit: 20, total: 0, totalPages: 0 },
  };

  const userId = getItem("user_id", ssr);

  const notifications = await api({
    method: "GET",
    route: buildPaginatedRoute(`notification/${userId}`),
    ssr,
  });

  const normalizedNotifications = normalizePaginatedResponse(notifications);
  props.notifications = [...normalizedNotifications.data].reverse();
  props.pagination = normalizedNotifications.pagination;

  return { props };
}

const NotificationsPage = ({ notifications, pagination: initialPagination }) => {
  const { userId } = useContext(UserContext);
  const { updateSeenNotifs } = useContext(AppContext);
  const [currentNotifications, setCurrentNotifications] = useState(notifications);
  const [pagination, setPagination] = useState(initialPagination || {});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      updateSeenNotifs();
    }
  }, [updateSeenNotifs, userId]);

  const onLoadMore = useCallback(async () => {
    const nextPage = (pagination.page || 1) + 1;

    if (isLoading || !pagination.totalPages || nextPage > pagination.totalPages) {
      return;
    }

    setIsLoading(true);
    const response = await api({
      method: "GET",
      route: buildPaginatedRoute(`notification/${userId}`, nextPage),
    });
    const normalizedNotifications = normalizePaginatedResponse(response, nextPage);

    if (!response.error) {
      setCurrentNotifications((current) => [
        ...current,
        ...[...normalizedNotifications.data].reverse(),
      ]);
      setPagination(normalizedNotifications.pagination);
    }
    setIsLoading(false);
  }, [isLoading, pagination, userId]);

  return (
    <AppLayout title="Notifications | Ara">
      <Notifications
        notifications={currentNotifications}
        pagination={pagination}
        isLoading={isLoading}
        onLoadMore={onLoadMore}
      />
    </AppLayout>
  );
};

export default NotificationsPage;
