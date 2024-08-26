import Link from "next/link";
import ProfilePhoto from "@components/ProfilePhoto";
import FollowButton from "@components/FollowButton";

const User = ({ id, nickname, username, profilePhoto, type, styles }) => {
  return (
    <Link className={`${styles[`${type}__link`]}`} href={`/profile/${id}`}>
      <article id="hover" className={`${styles[type]} bckgBlack clrWhite borderPurple hoverBlack`}>
        <ProfilePhoto photoUrl={profilePhoto} />
        <span className={`${styles[`${type}__nickname`]}`}>{nickname}</span>
        <span className={`${styles[`${type}__username`]}`}>@{username}</span>
        <FollowButton userIdToFollow={id} type={type} />
      </article>
    </Link>
  );
};

export default User;
