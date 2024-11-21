import { Search } from "@components/Inputs";
import { UsersSearchList } from "@components/Lists";
import { Container } from "@mui/material";

const SearchController = () => {
  return (
    <Container>
      <Search />
      <UsersSearchList />
    </Container>
  );
};

export default SearchController;
