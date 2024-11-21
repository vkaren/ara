type TNotifOption = "like" | "follow" | "reply";

interface INotifOptionContent {
  message: string;
  icon: string;
}

const notificationsTypes: Record<TNotifOption, INotifOptionContent> = {
  like: {
    icon: "mdi:heart-outline",
    message: "views.notifications.like",
  },
  follow: {
    icon: "mdi:plus",
    message: "views.notifications.follow",
  },
  reply: {
    icon: "mdi:comment-outline",
    message: "views.notifications.reply",
  },
};

export { notificationsTypes };

export type { TNotifOption, INotifOptionContent };
