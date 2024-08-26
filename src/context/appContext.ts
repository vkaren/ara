// import { createContext, useState } from "react";
// // import { getItem } from "@utils/cookies";
// // import api from "@utils/api";

// const AppContext = createContext({});

// function AppProvider({ children }) {
//   const [state, setState] = useState({
//     postDeleted: null,
//     replyDeleted: null,
//     haveNotifications: false,
//   });

//   const savePostDeleted = post => setState({ ...state, postDeleted: post });

//   const saveReplyDeleted = reply => setState({ ...state, replyDeleted: reply });

//   const notifyUser = () => setState({ ...state, haveNotifications: true });

//   const updateSeenNotifs = async () => {
//     // const userId = getItem("user_id");
//     // await api({
//     //   method: "PATCH",
//     //   route: `notification/${userId}`,
//     // });
//     // setState({ ...state, haveNotifications: false });
//   };

//   return (
//     // <AppContext.Provider
//     //   value={{
//     //     // ...state
//     //     // savePostDeleted,
//     //     // saveReplyDeleted,
//     //     // notifyUser,
//     //     // updateSeenNotifs,
//     //   }}
//     // >
//     //   {children}
//     // </AppContext.Provider>

//     null
//   );
// }

// export { AppContext, AppProvider };
