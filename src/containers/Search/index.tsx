import SearchController from "./SearchController";
import PeopleToFollow from "../PeopleToFollow";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <Stack direction={"column"} spacing={20}>
      <SearchController />
      <PeopleToFollow />
    </Stack>
  );
};

export default Search;
