import { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import api from "@utils/api";
import User from "../User";

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
      <Paper component="section" variant="outlined" sx={{ width: "80%", maxWidth: 600, p: 2, borderColor: "primary.main" }}>
        <TextField
          onChange={onSearchUser}
          type="search"
          fullWidth
          label="Search users"
          aria-label="Search users"
          autoComplete="off"
        />
      </Paper>

      <List sx={{ width: "80%", maxWidth: 600, p: 0, display: "grid", gap: 1 }} aria-live="polite">
        {searchedUsers.length > 0 ? (
          searchedUsers.map((user) => (
            <User
              key={user.id}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              type={"searched-user"}
            />
          ))
        ) : (
          <Typography component="li" color="text.secondary" role="status" sx={{ p: 2 }}>
            Search for a user to see results.
          </Typography>
        )}
      </List>
    </>
  );
};

export default SearchBox;
