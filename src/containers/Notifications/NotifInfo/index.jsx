import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconComponent from "@components/Icon";

const NotifInfo = ({ notifFrom, postId, type, seen }) => {
  const getNotifMessage = () => {
    if (type === "like") return `${notifFrom.username} liked your post.`;
    if (type === "reply") return `${notifFrom.username} replied to your post.`;
    if (type === "follow") return `${notifFrom.username} followed you.`;
    return "You have a new notification.";
  };

  return (
    <ListItemButton
      component={Link}
      href={postId ? `/post/${postId}` : `/profile/${notifFrom.id}`}
      sx={{
        borderBottom: 1,
        borderColor: "primary.light",
        backgroundColor: seen ? "transparent" : "action.hover",
        gap: 1,
      }}
    >
      <Avatar src={notifFrom.profile_photo} alt={`${notifFrom.username} profile photo`}>
        <IconComponent name="profile" />
      </Avatar>
      <ListItemText primary={getNotifMessage()} />
    </ListItemButton>
  );
};

export default NotifInfo;
