import { useContext, useEffect, useState } from "react";
import { UserContext } from "@context/userContext";
import api from "@utils/api";
import SearchBox from "./SearchBox";
import PeopleToFollow from "./PeopleToFollow";

const Search = () => {
  const { userId, getUserFollowingList } = useContext(UserContext);
  const [peopleToFollow, setPeopleToFollow] = useState([]);

  useEffect(() => {
    if (userId) {
      getPeopleToFollow();
    }
  }, [userId]);

  const getPeopleToFollow = async () => {
    const userFollowingList = await getUserFollowingList();

    const followingListIds = userFollowingList.map((user) => user.follow_to);

    const userList = await api({
      method: "GET",
      route: "user",
    });

    if (Array.isArray(userList)) {
      const peopleToFollow = userList.filter(
        (user) => !followingListIds.includes(user.id) && userId !== user.id
      );

      setPeopleToFollow(peopleToFollow);
    }
  };

  return (
    <>
      <SearchBox />
      <PeopleToFollow peopleToFollow={peopleToFollow} />
    </>
  );
};

export default Search;
