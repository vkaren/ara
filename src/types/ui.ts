import type {
  ReactNode,
  ChangeEvent,
  FormEvent,
  RefObject,
  SyntheticEvent,
} from "react";
import type {
  Author,
  Like,
  Notification,
  Post,
  Reply,
  User,
  FollowRelation,
} from "./domain";
import type { Pagination } from "./api";

export interface ReplyContext {
  replyingToPost: number;
  replyingToUser: number | string;
  closeModal?: () => void;
  onDeleteReply?: (replyId: number) => void;
}

export interface FormInput {
  title: string;
  props: {
    name: string;
    type: string;
    accept?: string;
    required?: boolean;
    minLength?: string | number;
    placeholder?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  anotherComponent?: (file: string) => ReactNode;
}

export interface FormProps {
  form: RefObject<HTMLFormElement>;
  inputs?: FormInput[];
  type: "sign" | "edit";
  fileUploaded?: string;
  submitMsg?: { error: boolean; msg: string };
  fieldErrors?: Record<string, string>;
  loading?: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

export interface PostProps extends Omit<Post, "inserted_image" | "likes" | "replies"> {
  insertedImage?: string | null;
  likes?: Like[];
  replies?: Reply[];
  isAReply?: ReplyContext;
  onDeletePost?: (event?: SyntheticEvent) => void;
}

export interface ReplyProps extends Omit<Reply, "inserted_image" | "replying_to_user"> {
  inserted_image?: string | null;
  replying_to_user: Author;
}

export interface LikeEvent extends Like {
  user_id: number;
  message_id: number;
  type: "post" | "reply";
}

export interface ProfileData extends User {
  followers: FollowRelation[];
  posts: Post[];
}

export interface ProfileProps extends Omit<ProfileData, "profile_photo"> {
  profilePhoto?: string | null;
}

export interface SearchUserProps extends Omit<User, "profile_photo"> {
  profilePhoto?: string | null;
  type?: "profile" | "people-tf" | "searched-user";
}

export interface NotificationsProps {
  notifications?: Notification[];
  pagination: Partial<Pagination>;
  isLoading: boolean;
  onLoadMore: () => void;
}
