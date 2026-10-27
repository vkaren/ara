import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import api from "@utils/api";
import User from "../User";
import styles from "./styles.module.css";

const SearchBox = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const timerRef = useRef(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onSearchUser = (e) => {
    const filterBy = e.target.value.trim();
    requestIdRef.current += 1;
    const requestId = requestIdRef.current;

    clearTimeout(timerRef.current);

    if (!filterBy) {
      setSearchedUsers([]);
      return;
    }

    timerRef.current = setTimeout(async () => {
      const users = await getUserListBy(filterBy);

      if (requestId === requestIdRef.current) {
        setSearchedUsers(users);
      }
    }, 500);
  };

  const getUserListBy = async (filterBy) => {
    const userList = await api({
      method: "GET",
      route: `user/?filter=${filterBy}`,
    });

    if (Array.isArray(userList)) {
      return userList;
    }

    return [];
  };

  return (
    <>
      <section className={`${styles["search-box"]} bckgBlack clrWhite`}>
        <input
          onChange={onSearchUser}
          className={styles["search-box__input"]}
          type="search"
          aria-label="Search users"
          placeholder="Search..."
          autoComplete="off"
        />
      </section>

      <ul className={`${styles["searched-container"]}`} aria-live="polite">
        {searchedUsers.length > 0 ? (
          searchedUsers.map((user) => (
            <User
              key={user.id}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              styles={styles}
              type={"searched-user"}
            />
          ))
        ) : (
          <Typography component="li" color="text.secondary" role="status" sx={{ p: 2 }}>
            Search for a user to see results.
          </Typography>
        )}
      </ul>
    </>
  );
};

export default SearchBox;
