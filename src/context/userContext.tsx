import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { setItem, getItem, removeItem } from "@utils/cookies";
import api from "@utils/api";
import type { ApiError, PaginatedResponse } from "@app-types/api";
import type {
  AuthResponse,
  FollowRelation,
  Notification,
  User,
} from "@app-types/domain";
import { AppContext } from "./appContext";

interface UserContextValue {
  userId: number | null;
  saveLoginResponse: (response: AuthResponse) => void;
  removeUserInfo: () => void;
  getUserData: () => Promise<User | ApiError>;
  getUserFollowingList: () => Promise<FollowRelation[]>;
  hasFollowedUser: (id: number) => Promise<boolean>;
}

const UserContext = createContext<UserContextValue>({} as UserContextValue);

function UserProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isLoginOrSignUpPage = router.asPath === "/login" || router.asPath === "/";
  const { notifyUser } = useContext(AppContext);
  const [userId, setUserId] = useState<number | null>(null);

  const saveLoginResponse = ({ user_id, token }: AuthResponse) => {
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
    const parsedUserId = Number(getItem("user_id"));
    setUserId(Number.isNaN(parsedUserId) ? null : parsedUserId);
  }, []);

  const getUserData = useCallback(async (): Promise<User | ApiError> => {
    return api<User>({ method: "GET", route: `user/${userId}` });
  }, [userId]);

  const getUserFollowingList = useCallback(async (): Promise<FollowRelation[]> => {
    const response = await api<FollowRelation[] | PaginatedResponse<FollowRelation>>({
      method: "GET",
      route: `follow/following/${userId}`,
    });

    return Array.isArray(response) ? response : "data" in response ? response.data : [];
  }, [userId]);

  const haveNewNotifications = useCallback(async () => {
    const response = await api<Notification[] | PaginatedResponse<Notification>>({
      method: "GET",
      route: `notification/${userId}?page=1&limit=100`,
    });
    const notifications = Array.isArray(response)
      ? response
      : "data" in response
        ? response.data
        : [];

    return notifications.some((notification) => !notification.seen);
  }, [userId]);

  const hasFollowedUser = useCallback(
    async (id: number) => {
      const userFollowingList = await getUserFollowingList();
      return userFollowingList.some((user) => user.follow_to === id);
    },
    [getUserFollowingList]
  );

  const onLoadAppPage = useCallback(async () => {
    if (userId) {
      if (await haveNewNotifications()) notifyUser();
    } else {
      getAndSaveUserId();
    }
  }, [getAndSaveUserId, haveNewNotifications, notifyUser, userId]);

  useEffect(() => {
    if (!isLoginOrSignUpPage) onLoadAppPage();
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
