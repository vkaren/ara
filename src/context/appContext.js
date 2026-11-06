import { createContext, useCallback, useState } from "react";
import { getItem } from "@utils/cookies";
import api from "@utils/api";

const AppContext = createContext({});

function AppProvider({ children }) {
  const [state, setState] = useState({
    postDeleted: null,
    replyDeleted: null,
    haveNotifications: false,
  });

  const savePostDeleted = useCallback(
    (post) => setState((currentState) => ({ ...currentState, postDeleted: post })),
    []
  );

  const saveReplyDeleted = useCallback(
    (reply) => setState((currentState) => ({ ...currentState, replyDeleted: reply })),
    []
  );

  const notifyUser = useCallback(
    () => setState((currentState) => ({ ...currentState, haveNotifications: true })),
    []
  );

  const updateSeenNotifs = useCallback(async () => {
    const userId = getItem("user_id");

    await api({
      method: "PATCH",
      route: `notification/${userId}`,
    });

    setState((currentState) => ({ ...currentState, haveNotifications: false }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        savePostDeleted,
        saveReplyDeleted,
        notifyUser,
        updateSeenNotifs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
