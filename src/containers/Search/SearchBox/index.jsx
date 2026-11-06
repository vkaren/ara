import { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import api from "@utils/api";
import User from "../User";

const SearchBox = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const timerRef = useRef(null);
  const requestIdRef = useRef(0);
  const abortControllerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      abortControllerRef.current?.abort();
    };
  }, []);

  const onSearchUser = (e) => {
    const filterBy = e.target.value.trim();
    requestIdRef.current += 1;
    const requestId = requestIdRef.current;

    clearTimeout(timerRef.current);
    abortControllerRef.current?.abort();
    setErrorMessage("");

    if (!filterBy) {
      setSearchedUsers([]);
      setHasSearched(false);
      setIsLoading(false);
      return;
    }

    setHasSearched(true);

    timerRef.current = setTimeout(async () => {
      setIsLoading(true);
      abortControllerRef.current = new AbortController();
      const result = await getUserListBy(filterBy, abortControllerRef.current.signal);

      if (requestId === requestIdRef.current) {
        setSearchedUsers(result.users);
        setErrorMessage(result.error || "");
        setIsLoading(false);
      }
    }, 500);
  };

  const getUserListBy = async (filterBy, signal) => {
    const userList = await api({
      method: "GET",
      route: `user/?filter=${filterBy}`,
      signal,
    });

    if (Array.isArray(userList)) {
      return { users: userList, error: "" };
    }

    if (userList.error && userList.status !== 0) {
      return { users: [], error: userList.message || "Unable to search users." };
    }

    return { users: [], error: "" };
  };

  return (
    <>
      <Paper
        component="section"
        variant="outlined"
        sx={{ width: "80%", maxWidth: 600, p: 2, borderColor: "primary.main" }}
      >
        <TextField
          onChange={onSearchUser}
          type="search"
          fullWidth
          label="Search users"
          aria-label="Search users"
          autoComplete="off"
        />
      </Paper>

      <List
        sx={{ width: "80%", maxWidth: 600, p: 0, display: "grid", gap: 1 }}
        aria-live="polite"
      >
        {isLoading ? (
          <Stack alignItems="center" component="li" sx={{ p: 2 }}>
            <CircularProgress size={24} aria-label="Searching users" />
          </Stack>
        ) : errorMessage ? (
          <Alert component="li" severity="error">
            {errorMessage}
          </Alert>
        ) : searchedUsers.length > 0 ? (
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
            {hasSearched ? "No users found." : "Search for a user to see results."}
          </Typography>
        )}
      </List>
    </>
  );
};

export default SearchBox;
