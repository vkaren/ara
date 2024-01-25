import User from "../User";
import styles from "./styles.module.css";

const PeopleToFollow = ({ peopleToFollow = [], darkTheme }) => {
  return (
    peopleToFollow.length > 0 && (
      <section
        className={`${styles["people-tf__section"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <h2 className={styles["people-tf__title"]}>People to follow</h2>

        <div className={styles["people-tf__container"]}>
          {peopleToFollow.map((user) => (
            <User
              key={`user-to-follow-${user.id}`}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              darkTheme={darkTheme}
              styles={styles}
              className={"people-tf"}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default PeopleToFollow;
