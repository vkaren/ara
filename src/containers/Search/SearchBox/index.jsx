import User from "../User";
import styles from "./styles.module.css";

const userTest = {
  id: 1,
  nickname: "karen",
  username: "karen",
};

const SearchBox = ({ searchedUsers = [userTest], onSearchUser, darkTheme }) => {
  return (
    <>
      <section
        className={`${styles["search-box"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <input
          // onChange={onSearchUser()}
          className={styles["search-box__input"]}
          type="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </section>

      <ul
        className={`${styles["searched-container"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        {searchedUsers.map((user) => (
          <User
            id={user.id}
            nickname={user.nickname}
            username={user.username}
            profilePhoto={user.profile_photo}
            styles={styles}
            className={"searched-user"}
          />
        ))}
      </ul>
    </>
  );
};

export default SearchBox;
