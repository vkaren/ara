import { createContext, useState } from "react";

const AppContext = createContext({});

function AppProvider({ children }) {
  const [state, setState] = useState({
    postDeleted: null,
    replyDeleted: null,
  });

  const savePostDeleted = (post) => setState({ ...state, postDeleted: post });

  const saveReplyDeleted = (reply) =>
    setState({ ...state, replyDeleted: reply });

  return (
    <AppContext.Provider
      value={{ ...state, savePostDeleted, saveReplyDeleted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
