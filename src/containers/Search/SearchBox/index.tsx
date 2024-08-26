import { useState } from "react";
// import api from "@utils/api";
import User from "../User";
import styles from "./styles.module.css";

const SearchBox = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);

  // const onSearchUser = () => {
  //   let timer;

  //   return e => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }

  //     timer = setTimeout(async () => {
  //       const filterBy = e.target.value;
  //       const regex = /\w+/gi;

  //       if (regex.test(filterBy)) {
  //         await getUserListBy(filterBy);
  //       }
  //     }, 500);
  //   };
  // };

  // const getUserListBy = async filterBy => {
  //   const userList = await api({
  //     method: "GET",
  //     route: `user/?filter=${filterBy}`,
  //   });

  //   if (Array.isArray(userList)) {
  //     setSearchedUsers(userList);
  //   }
  // };

  return (
    <>
      <section className={`${styles["search-box"]} bckgBlack clrWhite`}>
        <input
          // onChange={onSearchUser()}
          className={styles["search-box__input"]}
          type="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </section>

      <ul className={`${styles["searched-container"]}`}>
        {searchedUsers.map(user => (
          <User
            key={user.id}
            id={user.id}
            nickname={user.nickname}
            username={user.username}
            profilePhoto={user.profile_photo}
            styles={styles}
            type={"searched-user"}
          />
        ))}
      </ul>
    </>
  );
};

export default SearchBox;
