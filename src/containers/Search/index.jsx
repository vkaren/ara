import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import SearchBox from "./SearchBox";
import PeopleToFollow from "./PeopleToFollow";

const Search = ({ searchedUsers, peopleToFollow, onSearchUser }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <SearchBox
        searchedUsers={searchedUsers}
        onSearchUser={onSearchUser}
        darkTheme={darkTheme}
      />
      <PeopleToFollow peopleToFollow={peopleToFollow} darkTheme={darkTheme} />
    </>
  );
};

export default Search;
