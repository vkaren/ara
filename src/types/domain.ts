export interface User {
  id: number;
  nickname: string;
  username: string;
  profile_photo?: string | null;
  bio?: string | null;
}

export interface Author extends User {}

export interface Like {
  id?: number;
  user_id: number;
  post_id?: number;
  reply_id?: number;
  message_id?: number;
  type?: "post" | "reply";
}

export interface Reply {
  id: number;
  author: Author;
  content: string;
  createdAt: string;
  inserted_image?: string | null;
  likes: Like[];
  replying_to_post: number;
  replying_to_user: User;
}

export interface Post {
  id: number;
  author: Author;
  content: string;
  createdAt: string;
  inserted_image?: string | null;
  likes: Like[];
  replies: Reply[];
}

export interface Notification {
  id: number;
  notif_from: User;
  post_id?: number | null;
  type: "like" | "reply" | "follow" | string;
  seen: boolean;
}

export interface AuthResponse {
  user_id: number;
  token: string;
}

export interface FollowRelation {
  id?: number;
  follow_from: number;
  follow_to: number;
}
