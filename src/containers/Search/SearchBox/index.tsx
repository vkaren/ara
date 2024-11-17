// import User from "../User";

const SearchBox = () => {
  return (
    <>
      <section>
        <input
          // onChange={onSearchUser()}
          type="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </section>

      <ul>
        {/* {searchedUsers.map(user => (
          <User
            key={user.id}
            // id={user.id}
            // nickname={user.nickname}
            // username={user.username}
            // profilePhoto={user.profile_photo}
            // styles={styles}
            // type={"searched-user"}
          />
        ))} */}
      </ul>
    </>
  );
};

export default SearchBox;
