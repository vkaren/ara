import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { setItem, getItem, removeItem } from "@utils/cookies";
import api from "@utils/api";

const UserContext = createContext({});

function UserProvider({ children }) {
  const router = useRouter();
  const isLoginOrSignUpPage =
    router.asPath === "/login" || router.asPath === "/";

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

  return (
    <UserContext.Provider
      value={{
        userId,
        userData,
        saveLoginResponse,
        removeUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
