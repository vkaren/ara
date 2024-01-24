import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from "@config";

const ListeningSocketContext = createContext({});

function ListeningSocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [socketData, setSocketData] = useState({
    newPost: null,
    newReply: null,
    newLike: null,
    newDislike: null,
    newNotif: null,
  });

  useEffect(() => {
    setSocket(io.connect(config.api));
  }, []);

  useEffect(() => {
    socket?.on("new post", (data) => onNewSocketData("post", data));
    socket?.on("new reply", (data) => onNewSocketData("reply", data));
    socket?.on("new like", (data) => onNewSocketData("like", data));
    socket?.on("new dislike", (data) => onNewSocketData("dislike", data));
    socket?.on("new notification", (data) => onNewSocketData("notif", data));

    return () => socket?.removeAllListeners();
  }, [socket, socketData]);

  const onNewSocketData = (type, data) => {
    const newSocketData = {
      newPost: null,
      newReply: null,
      newLike: null,
      newDislike: null,
      newNotif: null,
    };

    console.log({ type, data });

    switch (type) {
      case "post":
        newSocketData.newPost = data.post;
        break;
      case "reply":
        newSocketData.newReply = data.reply;
        break;
      case "like":
        newSocketData.newLike = data.like;
        break;
      case "dislike":
        newSocketData.newDislike = data.dislike;
        break;
      case "notif":
        newSocketData.newNotif = data;
        break;
      default:
        return;
    }

    setSocketData(newSocketData);
  };

  return (
    <ListeningSocketContext.Provider
      value={{
        socketData,
      }}
    >
      {children}
    </ListeningSocketContext.Provider>
  );
}

export { ListeningSocketContext, ListeningSocketProvider };
