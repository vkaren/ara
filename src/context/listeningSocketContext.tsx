import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { io } from "socket.io-client";
import config from "@config";
import type { Like, Post, Reply } from "@app-types/domain";
import { AppContext } from "./appContext";
import { UserContext } from "./userContext";

interface SocketData {
  newPost: Post | null;
  newReply: Reply | null;
  newLike: Like | null;
  newDislike: Like | null;
  newNotif: Record<string, unknown> | null;
}

interface SocketPayload {
  post?: Post;
  reply?: Reply;
  like?: Like;
  dislike?: Like;
  notificationFor?: number;
  [key: string]: unknown;
}

interface ListeningSocketContextValue {
  socketData: SocketData;
}

const emptySocketData: SocketData = {
  newPost: null,
  newReply: null,
  newLike: null,
  newDislike: null,
  newNotif: null,
};

const ListeningSocketContext = createContext<ListeningSocketContextValue>({
  socketData: emptySocketData,
});

function ListeningSocketProvider({ children }: { children: ReactNode }) {
  const [socketData, setSocketData] = useState<SocketData>(emptySocketData);
  const { notifyUser } = useContext(AppContext);
  const { userId } = useContext(UserContext);
  const userIdRef = useRef(userId);
  const notifyUserRef = useRef(notifyUser);

  useEffect(() => {
    userIdRef.current = userId;
    notifyUserRef.current = notifyUser;
  }, [notifyUser, userId]);

  useEffect(() => {
    if (!config.api) return undefined;

    const socket = io(config.api);
    const handleNewPost = (data: SocketPayload) => onNewSocketData("post", data);
    const handleNewReply = (data: SocketPayload) => onNewSocketData("reply", data);
    const handleNewLike = (data: SocketPayload) => onNewSocketData("like", data);
    const handleNewDislike = (data: SocketPayload) => onNewSocketData("dislike", data);
    const handleNewNotification = (data: SocketPayload) =>
      onNewSocketData("notif", data);

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

  const onNewSocketData = (type: string, data: SocketPayload) => {
    const newSocketData: SocketData = { ...emptySocketData };

    switch (type) {
      case "post":
        newSocketData.newPost = data.post || null;
        break;
      case "reply":
        newSocketData.newReply = data.reply || null;
        break;
      case "like":
        newSocketData.newLike = data.like || null;
        break;
      case "dislike":
        newSocketData.newDislike = data.dislike || null;
        break;
      case "notif":
        newSocketData.newNotif = data;
        if (data.notificationFor === userIdRef.current) notifyUserRef.current();
        break;
      default:
        return;
    }

    setSocketData(newSocketData);
  };

  return (
    <ListeningSocketContext.Provider value={{ socketData }}>
      {children}
    </ListeningSocketContext.Provider>
  );
}

export { ListeningSocketContext, ListeningSocketProvider };
