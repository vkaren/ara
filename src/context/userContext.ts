// // import { useRouter } from "next/router";
// import { createContext, useContext, useEffect, useState } from "react";
// // import { setItem, getItem, removeItem } from "@utils/cookies";
// // import api from "@utils/api";
// // import { AppContext } from "./appContext";

// const UserContext = createContext({});

// function UserProvider({ children }) {
//   // const router = useRouter();
//   // const isLoginOrSignUpPage =
//   //   router.asPath === "/login" || router.asPath === "/";

//   // const { notifyUser } = useContext(AppContext);
//   // const [userId, setUserId] = useState(null);

//   // useEffect(() => {
//   //   if (!isLoginOrSignUpPage) {
//   //     onLoadAppPage();
//   //   }
//   // }, [userId, isLoginOrSignUpPage]);

//   // const onLoadAppPage = async () => {
//   //   if (userId) {
//   //     if (await haveNewNotifications()) {
//   //       notifyUser();
//   //     }
//   //   } else {
//   //     getAndSaveUserId();
//   //   }
//   // };

//   // const saveLoginResponse = ({ user_id, token }) => {
//   //   setItem("user_id", user_id);
//   //   setItem("token", token);

//   //   setUserId(user_id);
//   // };

//   // const removeUserInfo = () => {
//   //   removeItem("token");
//   //   removeItem("user_id");

//   //   setUserId(null);
//   // };

//   // const getAndSaveUserId = () => {
//   //   setUserId(getItem("user_id") - "");
//   // };

//   // const getUserData = async () => {
//   //   return await api({
//   //     method: "GET",
//   //     route: `user/${userId}`,
//   //   });
//   // };

//   // const getUserFollowingList = async () => {
//   //   return await api({
//   //     method: "GET",
//   //     route: `follow/following/${userId}`,
//   //   });
//   // };

//   // const haveNewNotifications = async () => {
//   //   const notifications = await api({
//   //     method: "GET",
//   //     route: `notification/${userId}`,
//   //   });

//   //   return notifications.some((notif) => !notif.seen);
//   // };

//   // const hasFollowedUser = async (id) => {
//   //   const userFollowingList = await getUserFollowingList();

//   //   return userFollowingList.some((user) => user.follow_to === id);
//   // };
//   // return (
//   //   <UserContext.Provider
//   //     value={{
//   //       userId,
//   //       saveLoginResponse,
//   //       removeUserInfo,
//   //       getUserData,
//   //       getUserFollowingList,
//   //       hasFollowedUser,
//   //     }}
//   //   >
//   //     {children}
//   //   </UserContext.Provider>
//   // );

//   return null;
// }

// export { UserContext, UserProvider };
