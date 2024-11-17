// import User from "../User";

const PeopleToFollow = ({ peopleToFollow = [] }) => {
  return (
    peopleToFollow.length > 0 && (
      <section>
        <h2>People to follow</h2>
        <div id="scroll">
          {/* {peopleToFollow.map(user => (
            <User
              key={`user-to-follow-${user.id}`}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              styles={styles}
              type={"people-tf"}
            />
          ))} */}
        </div>
      </section>
    )
  );
};

export default PeopleToFollow;
