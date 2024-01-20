import { useContext, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import UserInfo from "./UserInfo";
import Post from "@components/Post";
import styles from "./styles.module.css";

const Profile = ({
  id,
  nickname,
  username,
  profilePhoto,
  followers = [],
  bio,
  posts = [],
}) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <header
        className={`${styles["user-profile__header"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <div className={styles["header__bckg"]}></div>

        <UserInfo
          id={id}
          nickname={nickname}
          username={username}
          profilePhoto={profilePhoto}
          bio={bio}
          followers={followers}
        />
      </header>

      <section className={styles["user-profile__posts"]}>
        {posts.map((post) => (
          <Post
            key={`post-${post.id}`}
            id={post.id}
            author={post.author}
            createdAt={post.createdAt}
            content={post.content}
            insertedImage={post.inserted_image}
            likes={post.likes}
            replies={post.replies}
          />
        ))}
      </section>
    </>
  );
};

export default Profile;
