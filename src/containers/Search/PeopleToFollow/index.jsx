import User from "../User";
import styles from "./styles.module.css";

const PeopleToFollow = ({ peopleToFollow = [] }) => {
  return (
    peopleToFollow.length > 0 && (
      <section className={`${styles["people-tf__section"]}`}>
        <h2 className={`${styles["people-tf__title"]} clrWhite`}>
          People to follow
        </h2>

        <div
          id="scroll"
          className={`${styles["people-tf__container"]} scrollPurpleLgtBlck`}
        >
          {peopleToFollow.map((user) => (
            <User
              key={`user-to-follow-${user.id}`}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              styles={styles}
              type={"people-tf"}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default PeopleToFollow;
