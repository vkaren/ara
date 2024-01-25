import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { setItem, getItem, removeItem } from "@utils/cookies";
import api from "@utils/api";
import { AppContext } from "./appContext";

const UserContext = createContext({});

function UserProvider({ children }) {
  const router = useRouter();
  const isLoginOrSignUpPage =
    router.asPath === "/login" || router.asPath === "/";

  const { notifyUser } = useContext(AppContext);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!isLoginOrSignUpPage) {
      if (userId) {
        getAndSaveUserData();
      } else {
        getAndSaveUserId();
      }
    }
  }, [userId, isLoginOrSignUpPage]);

  useEffect(() => {
    if (userData && haveNewNotifications()) {
      notifyUser();
    }
  }, [userData]);

  const saveLoginResponse = ({ user_id, token }) => {
    setItem("user_id", user_id);
    setItem("token", token);

    setUserId(user_id);
  };

  const removeUserInfo = () => {
    removeItem("token");
    removeItem("user_id");

    setUserId(null);
    setUserData(null);
  };

  const getAndSaveUserId = () => {
    setUserId(getItem("user_id") - "");
  };

  const getAndSaveUserData = async () => {
    const user = await api({
      route: `user/${userId}`,
      method: "GET",
    });

    setUserData(user);
  };

  const getUserFollowingList = async () => {
    return await api({
      method: "GET",
      route: `follow/following/${userId}`,
    });
  };

  const haveNewNotifications = () => {
    return userData.notifications.some((notif) => !notif.seen);
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        userData,
        saveLoginResponse,
        removeUserInfo,
        getUserFollowingList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
