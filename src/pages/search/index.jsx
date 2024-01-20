import AppLayout from "@containers/AppLayout";
import Search from "@containers/Search";

const SearchPage = ({ userFollowing, peopleToFollow }) => {
  return (
    <AppLayout>
      <Search
      // searchedUsers={searchedUsers}
      // peopleToFollow={peopleToFollow}
      // onSearchUser={onSearchUser}
      />
    </AppLayout>
  );
};

export default SearchPage;
