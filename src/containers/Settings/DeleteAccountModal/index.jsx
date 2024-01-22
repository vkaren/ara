import styles from "./styles.module.css";

const DeleteAccountModal = ({ onCancelDeleteAccount, darkTheme }) => {
  const onDeleteAccount = async () => {
    // const response = await api({
    //   method: "DELETE",
    //   route: `user/${userId}`,
    // });
    // if (!response.error) {
    //   removeUserId();
    //   removeItem("refreshToken");
    //   removeItem("token");
    //   removeItem("start-time-interval");
    //   router.push("/login");
    // }
  };

  return (
    <>
      <section
        className={`${styles["delete-account_section"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <h2>Delete account</h2>
        <p>Are you sure do you want to delete your account?</p>

        <div className={styles["delete-account_options"]}>
          <button
            className={styles["delete-account_cancel-btn"]}
            onClick={onCancelDeleteAccount}
          >
            NO, CANCEL
          </button>

          <button
            className={styles["delete-account_accept-btn"]}
            onClick={onDeleteAccount}
          >
            YES, DELETE
          </button>
        </div>
      </section>

      <div
        className={styles["delete-account_overlay"]}
        onClick={onCancelDeleteAccount}
      ></div>
    </>
  );
};

export default DeleteAccountModal;
