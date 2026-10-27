import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import config from "@config";
import { AppContext } from "./appContext";
import { UserContext } from "./userContext";

const ListeningSocketContext = createContext({});

function ListeningSocketProvider({ children }) {
  const [socketData, setSocketData] = useState({
    newPost: null,
    newReply: null,
    newLike: null,
    newDislike: null,
    newNotif: null,
  });
  const { notifyUser } = useContext(AppContext);
  const { userId } = useContext(UserContext);
  const userIdRef = useRef(userId);
  const notifyUserRef = useRef(notifyUser);

  useEffect(() => {
    userIdRef.current = userId;
    notifyUserRef.current = notifyUser;
  }, [notifyUser, userId]);

  useEffect(() => {
    if (!config.api) {
      return undefined;
    }

    const socket = io(config.api);
    const handleNewPost = (data) => onNewSocketData("post", data);
    const handleNewReply = (data) => onNewSocketData("reply", data);
    const handleNewLike = (data) => onNewSocketData("like", data);
    const handleNewDislike = (data) => onNewSocketData("dislike", data);
    const handleNewNotification = (data) => onNewSocketData("notif", data);

    socket.on("new post", handleNewPost);
    socket.on("new reply", handleNewReply);
    socket.on("new like", handleNewLike);
    socket.on("new dislike", handleNewDislike);
    socket.on("new notification", handleNewNotification);

    return () => {
      socket.off("new post", handleNewPost);
      socket.off("new reply", handleNewReply);
      socket.off("new like", handleNewLike);
      socket.off("new dislike", handleNewDislike);
      socket.off("new notification", handleNewNotification);
      socket.disconnect();
    };
  }, []);

  const onNewSocketData = (type, data) => {
    const newSocketData = {
      newPost: null,
      newReply: null,
      newLike: null,
      newDislike: null,
      newNotif: null,
    };

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
        newSocketData.newNotif.notificationFor === userIdRef.current &&
          notifyUserRef.current();
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
