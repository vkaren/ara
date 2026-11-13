import { createContext, useCallback, useState, type ReactNode } from "react";
import { getItem } from "@utils/cookies";
import api from "@utils/api";

interface AppState {
  postDeleted: number | null;
  replyDeleted: number | null;
  haveNotifications: boolean;
}

export interface AppContextValue extends AppState {
  savePostDeleted: (postId: number) => void;
  saveReplyDeleted: (replyId: number) => void;
  notifyUser: () => void;
  updateSeenNotifs: () => Promise<void>;
}

const AppContext = createContext<AppContextValue>({} as AppContextValue);

function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    postDeleted: null,
    replyDeleted: null,
    haveNotifications: false,
  });

  const savePostDeleted = useCallback(
    (postId: number) => setState((current) => ({ ...current, postDeleted: postId })),
    []
  );

  const saveReplyDeleted = useCallback(
    (replyId: number) => setState((current) => ({ ...current, replyDeleted: replyId })),
    []
  );

  const notifyUser = useCallback(
    () => setState((current) => ({ ...current, haveNotifications: true })),
    []
  );

  const updateSeenNotifs = useCallback(async () => {
    const userId = getItem("user_id");

    await api({
      method: "PATCH",
      route: `notification/${userId}`,
    });

    setState((current) => ({ ...current, haveNotifications: false }));
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
