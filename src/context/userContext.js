import { useRouter } from "next/router";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { setItem, getItem, removeItem } from "@utils/cookies";
import api from "@utils/api";
import { AppContext } from "./appContext";

const UserContext = createContext({});

function UserProvider({ children }) {
  const router = useRouter();
  const isLoginOrSignUpPage = router.asPath === "/login" || router.asPath === "/";

  const { notifyUser } = useContext(AppContext);
  const [userId, setUserId] = useState(null);

  const saveLoginResponse = ({ user_id, token }) => {
    setItem("user_id", user_id);
    setItem("token", token);

    setUserId(user_id);
  };

  const removeUserInfo = () => {
    removeItem("token");
    removeItem("user_id");

    setUserId(null);
  };

  const getAndSaveUserId = useCallback(() => {
    const storedUserId = getItem("user_id");
    const parsedUserId = Number(storedUserId);

    setUserId(Number.isNaN(parsedUserId) ? null : parsedUserId);
  }, []);

  const getUserData = useCallback(async () => {
    return await api({
      method: "GET",
      route: `user/${userId}`,
    });
  }, [userId]);

  const getUserFollowingList = useCallback(async () => {
    return await api({
      method: "GET",
      route: `follow/following/${userId}`,
    });
  }, [userId]);

  const haveNewNotifications = useCallback(async () => {
    const notifications = await api({
      method: "GET",
      route: `notification/${userId}`,
    });

    return notifications.some((notif) => !notif.seen);
  }, [userId]);

  const hasFollowedUser = useCallback(
    async (id) => {
      const userFollowingList = await getUserFollowingList();

      return userFollowingList.some((user) => user.follow_to === id);
    },
    [getUserFollowingList]
  );

  const onLoadAppPage = useCallback(async () => {
    if (userId) {
      if (await haveNewNotifications()) {
        notifyUser();
      }
    } else {
      getAndSaveUserId();
    }
  }, [getAndSaveUserId, haveNewNotifications, notifyUser, userId]);

  useEffect(() => {
    if (!isLoginOrSignUpPage) {
      onLoadAppPage();
    }
  }, [isLoginOrSignUpPage, onLoadAppPage]);
  return (
    <UserContext.Provider
      value={{
        userId,
        saveLoginResponse,
        removeUserInfo,
        getUserData,
        getUserFollowingList,
        hasFollowedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
